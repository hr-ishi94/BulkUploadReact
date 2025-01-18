import React, { useRef, useState } from "react";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import emptyFolder from "../assets/emptyFolder.png";
import excelLogo from "../assets/excelLogo.png";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import excelModel from '../assets/excelModel.xlsx' 
import * as XLSX from 'xlsx'

const UploadModal = ({ handleOpen, open }) => {
  const folderRef = useRef(null);
  const dragTextRef = useRef(null);
  const loaderContentRef = useRef(null);
  const loaderBarRef = useRef(null);
  const fileInputRef = useRef(null); // Ref for file input

  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [data, setData] = useState(null)

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    validateAndAnimate(file);
  };

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    validateAndAnimate(file);
    const reader = new FileReader()

    reader.onload = (event)=>{
        const workbook = XLSX.read(event.target.result,{type:'binary'})
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const sheetData = XLSX.utils.sheet_to_json(sheet)
        setData(sheetData)
        console.log(data,'ddddd')
    }
    reader.readAsBinaryString(file)
  };

  const validateAndAnimate = (file) => {
    if (!file) return;
    if (
        file.type === "application/vnd.ms-excel" || // .xls
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || // .xlsx
        file.type === "text/csv" // .csv
      ) {
        triggerAnimation();
      } else {
        alert("Please upload a valid file (XLS, XLSX, or CSV format).");
      }
      
  };

  const triggerAnimation = () => {
  if (isUploading) return; // Prevent re-triggering
  setIsUploading(true);

  const timeline = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        setIsUploading(false); // Reset state after the animation
        handleOpen(); // Call handleOpen after animation and timeout
      }, 1000); // Simulate upload duration
    },
  });

  // Animate folder and drag text moving away
  timeline
    .to(folderRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    })
    .to(
      dragTextRef.current,
      {
        y: 80,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "<" // Start at the same time as the folder animation
    )
    // Animate loader content appearing
    .fromTo(
      loaderContentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    )
    // Animate loader bar filling from left
    .fromTo(
      loaderBarRef.current,
      { width: "0%", },
      { width: "100%", duration: 2, ease: "power1.inOut" }
    );
};

  
  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogBody>
        <div className="flex mb-5 mt-2 justify-between">
          <h1 className="font-quicksand font-bold text-xl text-black">
            Upload File
          </h1>
          <button onClick={handleOpen}>
            <Icon icon="gridicons:cross" width="24" height="24" />
          </button>
        </div>
        <div
          className={`font-quicksand flex flex-col border-2 border-dashed w-full h-64 justify-center items-center bg-gray-50 rounded-xl border-gray-400 ${
            isDragging ? "bg-gray-100" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <img
            src={emptyFolder}
            alt="emptyFolder"
            className="w-20 h-20"
            ref={folderRef}
          />
          <div
            className="w-full flex flex-col items-center justify-center absolute opacity-0"
            ref={loaderContentRef}
          >
            <div
              className="w-2/5 h-4 border-2 border-gray-300 rounded-md bg-gray-100 overflow-hidden"
              
            >
                <span ref={loaderBarRef} className="block w-full h-full bg-[#02b9b0] "></span>
            </div>
            <h1 className="text-gray-700 font-medium mt-2">
              Please wait while we upload your file...
            </h1>
          </div>
          <h1
            className="text-center text-sm space-x-1 text-gray-600 font-medium cursor-pointer"
            onClick={handleClickUpload}
            ref={dragTextRef}
          >
            Drag and drop your files here <br />
            or <span className="underline font-bold">click to upload</span>
          </h1>
          <input
            type="file"
            accept=".xls"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelection}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-gray-600 mt-1">
          <h1>Supported Formats: XLS, CSV</h1>
          <h1>Max file size: 25 MB</h1>
        </div>
        <div className="flex justify-evenly px-2 bg-gray-200 rounded-lg mt-5 space-x-4 py-4 font-quicksand">
          <div className="flex items-center justify-center p-1">
            <img src={excelLogo} alt="Excel" className="w-10 h-10" />
          </div>
          <div className="flex flex-col w-1/2">
            <h1 className="text-sm font-bold text-gray-800">Table Example</h1>
            <h2 className="text-xs text-gray-600 font-medium">
              You can download the attached example and use it as a starting
              point for your own file.
            </h2>
          </div>
          <div className="flex items-center">
            <a
              href={excelModel}
              className="text-sm font-bold flex bg-white border-2 border-gray-400 rounded-xl w-full p-2 text-gray-800 items-center justify-center" download
            >
              <Icon icon="iconoir:download" width="20" height="20" />
              Download XLSX
            </a>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <button
          onClick={handleOpen}
          className="text-black bg-white border-2 py-2 px-3 mx-1 border-gray-400 text-base rounded-xl font-quicksand font-medium"
        >
          <span>Cancel</span>
        </button>
        <button
          onClick={handleOpen}
          className="text-white font-medium bg-[#02b9b0] border-2 py-2 px-3 mx-1 text-base rounded-xl font-quicksand"
        >
          <span>Continue</span>
        </button>
      </DialogFooter>
    </Dialog>
  );
};

export default UploadModal;
