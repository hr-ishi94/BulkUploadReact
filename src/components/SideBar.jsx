import React from 'react'
import KelickLogo from '../assets/KelickLogo.png' 
import {Icon }from '@iconify/react'
import { Progress } from '@material-tailwind/react'
// import { Progress } from '@material-tailwind/react'

const SideBar = () => {
  return (
    <aside
    className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-md overflow-hidden"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-3 flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center py-3">
        <img className="w-24 h-auto" src={KelickLogo} alt="KelickLogo" />
      </div>
  
      {/* Main Content */}
      <div className="flex flex-col justify-between flex-grow">
        {/* Navigation Section */}
        <div className="flex flex-col gap-2">
          <ul className="space-y-1 font-medium mx-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
              >
                <Icon icon="proicons:home" width="24" height="24" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
          </ul>
  
          <div>
            <h1 className="flex items-center justify-around text-gray-700 text-base uppercase font-bold">
              <span>Organization</span>
              <Icon icon="formkit:down" width="16" height="7" />
            </h1>
  
            <ul className="space-y-1 font-medium mt-2 mx-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="iconoir:city" width="24" height="24" />
                  <span className="ms-3">Kelick</span>
                </a>
              </li>
            </ul>
  
            <h1 className="text-gray-700 text-base mx-3 uppercase font-bold">Manage</h1>
            <ul className="space-y-1 font-medium mx-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="iconoir:community" width="24" height="24" />
                  <span className="ms-3">Employees</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="iconoir:send-dollars" width="24" height="24" />
                  <span className="ms-3">Payroll</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="iconoir:calendar" width="24" height="24" />
                  <span className="ms-3">Leaves</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="iconoir:calendar" width="24" height="24" />
                  <span className="ms-3">Claims</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-200 hover:border-gray-400 hover:border-2 group"
                >
                  <Icon icon="weui:more-outlined" width="24" height="24" />
                  <span className="ms-3">More</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Section */}
        <div className="py-3 space-y-3 mx-3">
          <h1 className="flex items-center font-medium text-sm text-gray-900">
            <Icon icon="iconoir:wallet" width="24" height="24" />
            <span className="ml-2">Free Plan</span>
          </h1>
          <h6 className="text-sm text-gray-900">1/10 Employees</h6>
            <Progress size='sm' value={10} color=""  barProps={{ className: 'bg-[#02b9b0]' }} />
          
      
          <hr className="my-4 " />
          <h1 className="flex items-center font-medium text-sm text-gray-900 ">
            <Icon icon="iconoir:bell" width="24" height="24" />
            <span className="ml-2">Notifications</span>
          </h1>
          <div className="mt-2 flex gap-3">
            <div className='rounded-full bg-gray-200 w-10 h-10 border-2'></div>
            <div className='flex flex-col'>

            <h5 className="font-medium text-gray-900">John Doe</h5>
            <p className="text-sm text-gray-500">johndoe@asure.pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
  

  )
}

export default SideBar