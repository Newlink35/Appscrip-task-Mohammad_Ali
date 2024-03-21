"use-client"

import Image from 'next/image'
import leftdropdown from "../../public/leftdropdown.svg"
import dropdown from "../../public/dropdown.svg"

import React from 'react'

const FilteredHeadCombine = ({showFilter , setShowFilter}) => {




    return (


        <div className='mttop50px onehunwidth parentdivmainfilter'>
            <div className='filteredmain-champ filtered-heremain'>
                <div className='left-side'>
                    <span className='items-maincss font-w700'>3425 ITEMS</span>
                    <span className='doflexandalcenter'>
                        <Image src={leftdropdown} />
                        <span onClick={()=>setShowFilter(!showFilter)} className='hide-filters-text'>{showFilter ? "HIDE FILTERS" : "SHOW FILTER"}</span>
                    </span>
                </div>

                <div >
                    <span className='rigt-side-filter'>
                        <span className='font-w700'>RECOMMENDED</span>
                        <span>
                            <Image src={dropdown} />
                        </span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default FilteredHeadCombine
