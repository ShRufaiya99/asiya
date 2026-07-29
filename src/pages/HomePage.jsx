import React from 'react'
import Banner from '../component/home/Banner'
import Catagory from '../component/home/Catagory'
import TrendyProducts from '../component/home/TrendyProducts'
import SpringCollection from '../component/home/SpringCollection'
import Starting from '../component/home/Starting'
import LimitedEdition from '../component/home/LimitedEdition'
import UomoLogoImgs from '../component/home/UomoLogoImgs'

const HomePage = () => {
  return (
      <>
      <Banner/>
      <Catagory/>
      <TrendyProducts/>
      <SpringCollection/>
      <Starting/>
      <LimitedEdition/>
      <UomoLogoImgs/>
      </>
  )
}

export default HomePage