import React, { useState } from 'react'
import Tittle from '../common/Tittle'
import trendyData from '../../api/trendyData.json'
import Product from '../common/Product'
const TrendyProducts = () => {
  let [activeCatagory, setActiveCatagory] =useState()
  return (
    <section className='mt-23.5 '>
      <div className='container'>
       <Tittle name="OUR TRENDY" namebold="PRODUCTS"/>
       <ul className='flex justify-center gap-13.5'>
     {  trendyData.map((item)=>(
        <li>
          <button onClick={()=>setActiveCatagory(item.id)} className={`${item.id == activeCatagory ? "text-primary" : "text-gray"} text-base font-medium `}>{item.name }</button> 
        </li>
       ))}
       </ul>
       <Product/> 
      </div>
    </section>
  )
}

export default TrendyProducts