"use-client"


import React, { useState } from 'react'
import HeaderMain from './Header/HeaderMain'
import CombinedDiv from './DiscoverContent/CombinedDiv'
import FilteredHeadCombine from './FilteredHeading/FilteredHeadCombine'
import ProductCumFilter from './produccumfilter/ProductCumFilter'
import FooterMain from './FooterPart/FooterMain'

const MainComp = () => {

  const [showFilter, setShowFilter] = useState(false);


  
  return (
    <div className='main-frame white-colormain'>
      {/* All header files are in hear */}
      <HeaderMain /> 

      {/* BoxMiddleInHear  */}
      <CombinedDiv />


      {/* filterheading*/}
      <FilteredHeadCombine showFilter={showFilter} setShowFilter={setShowFilter}/>


      {/* for aside filter and right product */}
      <ProductCumFilter showFilter={showFilter} setShowFilter={setShowFilter}/>


      <FooterMain />
    </div>
  )
}

export default MainComp
