import React from 'react'
import { Icon } from '@iconify/react'
import DropDown from './DropDown'

const EmpTable = () => {
  return (
    

  <div className="relative overflow-x-auto sm:rounded-lg m-6 ">
    <div className='flex justify-between my-4'>
      <h1 className='text-lg font-bold mx-2'>All Employees</h1>
      <div className='flex gap-3 '>
        
        <form class="max-w-md mx-auto  ">   
            <div class="relative  border-2 border-gray-400 rounded-lg">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="w-full h-5 p-4 ps-10 text-sm rounded-lg bg-gray-50 " placeholder="Search Employee" required />
            </div>
        </form>
        <DropDown type="All Status"/>
        <DropDown type="All Role"/>

      </div>
    </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3 ">
                      <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <div className='flex items-center gap-5'>
                      Employee ID <Icon icon="iconoir:arrow-separate-vertical" width="24" height="24"  />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <div className='flex items-center gap-5'>
                        Employee Profile <Icon icon="iconoir:arrow-separate-vertical" width="24" height="24"  />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className='flex items-center gap-5'>
                        Email <Icon icon="iconoir:arrow-separate-vertical" width="24" height="24"  />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className='flex items-center gap-5'>
                        Role <Icon icon="iconoir:arrow-separate-vertical" width="24" height="24"  />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className='flex items-center gap-5'>
                        Status <Icon icon="iconoir:arrow-separate-vertical" width="24" height="24"  />
                    </div>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
                  <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
                  <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
                  <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
                  <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              
          </tbody>
      </table>
  </div>



  )
}

export default EmpTable