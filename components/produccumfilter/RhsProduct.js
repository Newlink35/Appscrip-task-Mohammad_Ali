

import Image from 'next/image'
import Purse from "../../public/Front Pic.png"
import React, { useEffect, useState } from 'react'

const RhsProduct = ({ showFilter, setShowFilter , products, setProducts, fetchData, loading }) => {



  

  return (
    <div className={`${showFilter ? 'rhsfilter-container' : 'rhsfilter-container-4t'}`}>
      {loading  ? "Loading..." :
        products.map((item, index) => (
          <div className='product-div-size' key={item.id}>
            <div>
              <img className='productimagewidth' src={item.image} width={100} height={100} />
            </div>
            <div className=' margin-right-10px text-overflowec'>
              <h4 className='text-overflowec fontsizeandweight70018px'>{item.title}</h4>
              <span className='text-overflowec fontsizeandweight40014px fontcolorgrayblack '>{item.description}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RhsProduct
