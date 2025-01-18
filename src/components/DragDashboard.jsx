import React from 'react'
import SearchUser from '../assets/SearchUser.png'
import { Icon } from '@iconify/react'
import UploadModal from './UploadModal';
import SuccessModal from './SuccessModal';

const DragDashboard = () => {

    
      const [open, setOpen] = React.useState(false);
      const [open1, setOpen1] = React.useState(false);
     
      const handleOpen = () => setOpen(!open);
      const handleOpen1 = () => setOpen1(!open1);

  return (
    <div className='border-2 border-gray-400 rounded-lg m-7 w-auto h-96 flex flex-col items-center justify-center'>
        <img src={SearchUser} alt="" />
        <h1 className='text-xl font-bold text-gray-800'>Start Building your team</h1>
        <h1 className='text-sm text-gray-700'>Add your first team member or import your entire team</h1>
        <div className='flex gap-2 mt-6'>
            <button className='text-sm border-2 border-gray-500 p-2 rounded-lg bg-gray-50 flex gap-2' onClick={handleOpen}> <Icon icon="iconoir:add-database-script" width="18" height="18" /> Bulk Upload</button>
            <button className='text-white bg-[#02b9b0] p-2 rounded-lg text-sm flex gap-2 ' onClick={handleOpen1}><Icon icon="iconoir:add-user" width="18" height="18"  /> Add Employee</button>
        </div>
        <UploadModal handleOpen={handleOpen} open = {open}/>
        <SuccessModal handleOpen={handleOpen1} open={open1}/>
         
    </div>
  )
}

export default DragDashboard