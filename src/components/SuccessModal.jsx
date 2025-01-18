import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import emptyFolder from '../assets/emptyFolder.png'
import excelLogo from '../assets/excelLogo.png'
import {Icon} from '@iconify/react'

const SuccessModal = ({handleOpen,open}) => {
 
  return (
    
    <>
      
    <Dialog open={open} handler={handleOpen} size="xs">
      <DialogBody >
          
       <div className="flex flex-col font-quicksand ">
          <div className="flex flex-col items-center gap-2 my-4">

              <Icon icon="qlementine-icons:success-32" className="text-green-500 w-14 h-14"/>
              <h1 className="text-center font-bold text-black">Congrats! You've successfully added all your employees</h1>
            <h1 className="text-gray-800 font-medium">Would you like to generate payroll?</h1>
          </div>
      
          <div className="flex justify-center ">

        <button
          onClick={handleOpen}
          className=" text-black bg-white border-2 py-2 px-3 mx-1 w-1/2 border-gray-400 text-base rounded-xl font-quicksand font-medium"
        >
          <span>I'll do it later</span>
        </button>
        <button  onClick={handleOpen} 
          className=" text-white font-medium bg-[#02b9b0] border-2 py-2 w-1/2 px-2 mx-1 text-base rounded-xl font-quicksand ">
          <span>Generate Payroll</span>
        </button>
          </div>
      </div>
      </DialogBody>
      
      <DialogFooter >
      </DialogFooter>
    </Dialog>
  </>


  );
}


export default SuccessModal



