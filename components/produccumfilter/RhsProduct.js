import Image from 'next/image'
import Purse from "../../public/Front Pic.png"
import React from 'react'

const RhsProduct = ({showFilter, setShowFilter}) => {
  return (
    <div className={`${showFilter ? 'rhsfilter-container' : 'rhsfilter-container-4t'}`}>
      {
        [1,2,3,4,5,6].map((item,index)=>(
          <div className='product-div-size'>
            <div>
              <Image className='productimagewidth' src={Purse} />
            </div>
            <div className='margin-right-10px'>
              <h4 className='fontsizeandweight70018px'>Ppxoc milkyway dress in</h4>
              <span className='fontsizeandweight40014px fontcolorgrayblack'>Sign in or Create an account to see pricing</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RhsProduct
