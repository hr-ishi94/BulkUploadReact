import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import  Nav  from './components/Nav'
import EmpTable from './components/EmpTable'
import DragDashboard from './components/DragDashboard'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './components/Loader'
import { Bounce, toast, ToastContainer } from 'react-toastify'



const App = () => {

  const { employees, loading, error } = useSelector((state)=>state.employees)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  
  const handleAnimationComplete = () =>{
    setAnimationComplete(true)
    setShowLoader(true)

    setTimeout(()=>{
      setShowLoader(false)
      toast.success("Employees successfully added")
    },1500)
  }


  if(loading){
    return <Loader/>
  }
  
  return (
    <div className='flex h-screen font-quicksand'>
      <aside className='w-60'>
        <SideBar/>
      </aside> 
      <main className='flex-grow flex flex-col'>
        <header className='w-auto shadow-md '>
          <Nav/>
        </header>
        <section >
          { !animationComplete?<DragDashboard setAnimationComplete= {handleAnimationComplete}/>:
          showLoader?<Loader/>:<EmpTable employees={employees}/> }
        </section>
      </main>




      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </div>

    
  )
}

export default App