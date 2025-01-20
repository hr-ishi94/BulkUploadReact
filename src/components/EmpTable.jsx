import React from 'react'
import { Icon } from '@iconify/react'
import DropDown from './DropDown'
import EmpCard from './EmpCard'
import EmpTypeCard from './EmpTypeCard'
import { useSelector } from 'react-redux'

const EmpTable = ({employees}) => {
console.log(employees)
  const groupByProperty = (data, property) => {
    return data.reduce((acc,item) =>{
      const key = item[property]
      const found = acc.find((entry)=>entry.name === key)
      if (found){
        found.value += 1
      }else{
        acc.push({ name:key , value:1 })
      }
      return acc
    
    },[])
    
  }

  const data01 = groupByProperty(employees,'nationality')
  const data02 = groupByProperty(employees,'status')
  const data03 = groupByProperty(employees,'employment_type')

  const employeeStatusOptions = ['Active', 'Invite Sent', 'Payroll Only'];
  const roleOptions = ['Senior Marketer', 'Manager', 'Developer', 'Designer'];
        
  return (
    

  <div className="relative overflow-x-auto mx-6 my-2 ">
      <div className='flex justify-end mb-2'>

      <a className='flex px-1 py-1 border-2 rounded-xl border-gray-400'><Icon icon="iconoir:download" width="24" height="24" />Export</a>
      </div>

    
    <div className='flex gap-3'>
      <EmpCard itemName="Nationality" data={data01}  />
      <EmpTypeCard data={data03}/>
      <EmpCard itemName="Employee Status" data={data02} halfPie />
    </div>
    <div className='flex justify-between my-4'>
      <h1 className='text-lg font-bold mx-2'>All Employees</h1>
      <div className='flex gap-3 '>
        
        <form className="max-w-md mx-auto  ">   
            <div className="relative  border-2 border-gray-400 rounded-lg">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="w-full h-5 p-4 ps-10 text-sm rounded-lg bg-gray-50 " placeholder="Search Employee" required />
            </div>
        </form>
        <DropDown type="All Status" options={employeeStatusOptions}/>
        <DropDown type="All Role" options={roleOptions}/>

      </div>
    </div>
    <div className=' border-2 rounded-lg overflow-hidden'>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2">
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
            {employees.map((emp)=>(
              <tr className="bg-white border-b-2">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <td className="px-6 py-3">
                      <a href="">{emp.employee_id}</a>
                  </td>
                  <td className="px-6 py-3">
                      <div className='flex gap-2'>
                        <div className='w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-500'></div>
                        <h1 className='pt-2'>
                        {emp.employee_profile}

                        </h1>
                      </div>
                  </td>
                  <td className="px-6 py-3">
                      {emp.email}
                  </td>
                  <td className="px-6 py-3">
                      {emp.role}
                  </td>
                  <td className="px-6 py-3 ">
                    <div className='bg-blue-200 w-20  text-blue-600 rounded-full flex flex-grow items-center px-3  py-1'>
                      <Icon icon="pajamas:status-active" width="12" height="12" />
                      <a href="#" className="font-medium  "> {emp.status}</a>

                    </div>
                  </td>
              </tr>

            ))}
            
              
              
              
          </tbody>
      </table>
      </div>

  </div>



  )
}

export default EmpTable