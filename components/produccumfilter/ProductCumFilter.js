import React, { useState } from 'react'
import LhsFilter from './LhsFilter'
import RhsProduct from './RhsProduct'

const ProductCumFilter = ({showFilter , setShowFilter, products, setProducts, fetchData, loading}) => {


    

    return (
        <div className='margintop10px parent-produc-cum-filter'>

            <div className=' child-produc-cum-filter filteredmain-champ'>
                {
                    showFilter && <LhsFilter fetchData={fetchData} products={products} setProducts={setProducts} />
                }
                <RhsProduct  products={products} setProducts={setProducts} showFilter={showFilter} setShowFilter={setShowFilter} fetchData={fetchData} loading={loading}/>

            </div>

        </div>
    )
}

export default ProductCumFilter
