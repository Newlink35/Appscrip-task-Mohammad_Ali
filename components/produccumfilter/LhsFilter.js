import React from 'react'
import dropdown from "../../public/dropdown.svg"
import Image from 'next/image'


const LhsFilter = () => {
  return (
    <div className='lhsfilter-container'>

      {/* cutomize filter part */}
      <div className='mobilerescenter postop20px group-lhs-customize'>
        <input className='checkboxlhs' type='checkbox' />
        <label className='black-colormain font-w700 uppercase-it'>Customizable</label>
      </div>

      {/* remaining all the filters */}

      {/* 1stidealfor */}
      <div className='for-filter-all-content'>
        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='font-w700'>Ideal for</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>



        {/* 2ndoccassion */}

        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>Occassion</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 3rd work */}

        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>work</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 4th fabric */}
        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>fabric</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>

        {/* 5thr for segment  */}

        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>segment</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 6th for suitable for  */}

        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>suitable for</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* rawmaterial */}
         <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>raw materials</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* pattern */}
        <span className='flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>patter</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>

      </div>

    </div>
  )
}

export default LhsFilter
