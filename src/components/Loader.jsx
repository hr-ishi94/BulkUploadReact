import React,{CSSProperties} from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
    const override = {
        borderWidth: "8px", 
        animationDirection: "reverse",
        color: "#02b9b0",
      };
  return (
    <div className='flex flex-col items-center relative top-52'>

      <ClipLoader size={80} color='#02b9b0' speedMultiplier={0.5}  cssOverride={override}/>
    </div>
  )
}

export default Loader
