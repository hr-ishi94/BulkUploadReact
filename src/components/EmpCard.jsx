import React from 'react'
import { PieChart,Pie ,Cell} from 'recharts'

const EmpCard = ({itemName, data, halfPie}) => {

    const {name, value} = data[0]
    
    const colors = ['#02B9B0','#B774FC','#B3BEBE','#FAC905']
  return (
    <div className='w-2/6 h-52 border-gray-200 border-2 shadow-md rounded-md flex flex-col '>
        <div className='flex'>
            <div className='flex flex-col items-start ml-5 my-4 gap-1'>

                <h1 className='text-sm text-gray-600 font-medium'>{itemName}</h1>
                <h1 className='text-3xl font-bold'>{value}</h1>
                <h1 className='text-md font-medium'>{name} {name == 'Active' && 'Employees'}</h1>
            </div>
            <div className='relative left-12 top-2'>
                <PieChart width={150} height={150}>
                    {!halfPie?
                    <Pie data={data} dataKey="value" nameKey="name"  innerRadius={33} outerRadius={40} fill="#82ca9d" >
                        {data.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[index%colors.length]}/>

                        ))}
                    </Pie>
                    :<Pie data={data} dataKey="value" nameKey="name"  innerRadius={57} outerRadius={65} fill="#82ca9d"  startAngle={180} endAngle={0}>
                        {data.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[(index%colors.length)]} className='rounded-lg'/>

                        ))}

                    </Pie> }
                </PieChart>
            </div>
            
        </div>
        <div>

        <div className={` grid ${halfPie?"grid-cols-3 mt-5": "grid-cols-2 gap-y-1.5"} mx-3`}>
            {
                data.map((entry,index)=>(
                    <h1 className='flex items-center text-sm '> <span
                    className={`inline-block h-5 w-1.5  mr-1.5 rounded-lg`}
                    style={{
                      backgroundColor: colors[index % colors.length], // Dynamically set border color
                    }}
                  ></span>{entry.value} {entry.name}</h1>
                ))
            }
        </div>
            </div>

    </div>
  )
}

export default EmpCard