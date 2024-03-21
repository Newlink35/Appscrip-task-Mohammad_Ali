import React from 'react'
import LhsFilter from './LhsFilter'
import RhsProduct from './RhsProduct'

const ProductCumFilter = ({showFilter , setShowFilter}) => {
    return (
        <div className='margintop10px parent-produc-cum-filter'>

            <div className=' child-produc-cum-filter filteredmain-champ'>
                {
                    showFilter && <LhsFilter />
                }
                <RhsProduct showFilter={showFilter} setShowFilter={setShowFilter}/>

            </div>

        </div>
    )
}

export default ProductCumFilter
