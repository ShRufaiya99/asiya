import React from 'react'
import catagoryData from "../../api/catagoryData.json"
import Image from '../common/Image'
const Catagory = () => {
  return (
    <section className='mt-25'>
     <div className='container'>
      <div className='grid grid-cols-4 gap-2'>
        {
          catagoryData.map((item)=>(
            <div className={`${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"} w-full h-full`}>
              <Image src={item.image} alt={item.name}/>
            </div>
       
          ))
        }
      </div>
     </div>
    </section>
  )
}

export default Catagory