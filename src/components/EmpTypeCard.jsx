import React from 'react'

const EmpTypeCard = ({data}) => {
  const {name, value } = data[0]
  console.log(data)

    const colors = ['#02B9B0','#B774FC','#B3BEBE','#FAC905']
    const total = data.reduce((entry,item)=> entry + item.value, 0)

  return (
    <div className=' w-2/5 h-52 rounded-md border-2 border-gray-200 shadow-md flex flex-col gap-8 '>
        <div className='flex flex-col'>
            <div className='flex flex-col items-start gap-1 ml-5 my-5'>
                <h1 className='text-sm text-gray-600 font-medium'>Employee Type</h1>
                <h1 className='text-3xl font-bold'>{value}</h1>
                <h1 className='text-md font-medium'>{name}</h1>
            </div>
            <div className='flex justify-center mx-4'>
                {data.map((entry,index)=>
                <span
                className={`inline-block h-2.5 rounded-full mr-0.5`}
                style={{
                  backgroundColor: colors[index % colors.length], 
                  width:`${(entry.value/total)*100}%`
                }}
              ></span>
                )}

            </div>
        </div>
        <div className={`flex justify-center gap-6 mr-3`}>
            {
                data.map((entry,index)=>(
                    <h1 className='flex items-center text-sm '> <span
                    className={`inline-block h-5 w-1.5 mr-2 rounded-lg`}
                    style={{
                      backgroundColor: colors[index % colors.length], // Dynamically set border color
                    }}
                  ></span>{entry.value} {entry.name}</h1>
                ))
            }
        </div>
    </div>
  )
}

export default EmpTypeCard