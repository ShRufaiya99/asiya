import React from 'react'
import catagoryData from "../../api/catagoryData.json"
import Image from '../common/Image'
import { Link } from 'react-router'
const Catagory = () => {
  return (
    <section className='mt-25'>
     <div className='container'>
      <div className='grid grid-cols-4 gap-7.5'>
        {
          catagoryData.map((item)=>(
            <div className={`${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"} w-full h-full relative`}>
              <Image src={item.image} alt={item.name}/>
              <div className='absolute left-10 bottom-10'>
                <h3 className='font-normal text-[14px] leading-6 text-primary'>HOT LIST</h3>
                <h2 className='font-medium text-[26px] text-primary'> <span className='font-bold'> {item.name} </span>COLLECTION</h2>
                <Link className='font-normal text-[14px] leading-6 text-primary'>SHOP NOW</Link>
              </div>
            </div>
       
          ))
        }
      </div>
     </div>
    </section>
  )
}

export default Catagory