"use-client"

import Image from 'next/image'
import leftdropdown from "../../public/leftdropdown.svg"
import dropdown from "../../public/dropdown.svg"

import React, { useState } from 'react'

const FilteredHeadCombine = ({ showFilter, setShowFilter }) => {


    const [recommended, setRecommended] = useState(false)




    return (


        <div className='mttop50px onehunwidth parentdivmainfilter'>
            <div className='filteredmain-champ filtered-heremain'>
                <div className='left-side'>
                    <span className='items-maincss font-w700'>3425 ITEMS</span>
                    <span className='doflexandalcenter'>
                        <Image src={leftdropdown} />
                        <span onClick={() => setShowFilter(!showFilter)} className='hide-filters-text'>{showFilter ? "HIDE FILTERS" : "SHOW FILTER"}</span>
                    </span>
                </div>

                <div className='positionrelative'>
                    <span onClick={(e) => {
                        e.stopPropagation()
                        setRecommended(!recommended)
                    }} className='rigt-side-filter'>
                        <span className=' font-w700'>
                            RECOMMENDED

                        </span>
                        <span>
                            <Image src={dropdown} />
                        </span>
                    </span>
                    {recommended && <div className='positionabsolutemenu'>
                        <>
                            <ul className='uppercase-it displaytextmain'>
                                <h4 className='uppercase-it'>Recommended</h4>
                                <div>
                                    <li>Newest First</li>
                                    <li>Popular</li>
                                    <li>Price: High to low</li>
                                    <li>Price: low to high</li>
                                </div>
                            </ul>
                        </>
                    </div>}
                </div>
            </div>
        </div>

    )
}

export default FilteredHeadCombine
