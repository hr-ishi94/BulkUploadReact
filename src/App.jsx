import React from 'react'
import SideBar from './components/SideBar'
import  Nav  from './components/Nav'
import EmpTable from './components/EmpTable'


const App = () => {
  return (
    <div className='flex h-screen font-quicksand'>
      <aside className='w-60'>
        <SideBar/>
      </aside> 
      <main className='flex-grow flex flex-col'>
        <header className='w-auto shadow-md'>
          <Nav/>
        </header>
        <section>
          <EmpTable/>
        </section>
      </main>
    
    </div>
  )
}

export default App