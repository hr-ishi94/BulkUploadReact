import React from 'react'
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className='flex justify-between px-10 py-5 '>
        <h1 className='text-2xl font-bold'>Employees</h1>
        <a className='bg-[#02b9b0] text-sm text-white p-2 rounded-xl flex'><Icon icon="iconoir:add-user" width="18" height="18" className='mx-1'/>   Add Employee</a>
    </div>
  )
}

export default Nav