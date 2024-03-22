import React, { useState } from 'react'
import dropdown from "../../public/dropdown.svg"
import Image from 'next/image'


const LhsFilter = ({ products, setProducts, fetchData }) => {

  const [modal, setModal] = useState(false);
  const [checked, setIsChecked] = useState(false)
  const [womenchecked, setIsCheckedwomen] = useState(false)
  const [jewelry, setJewerly] = useState(false)
  const [customize, setCustomize] = useState(false);


  function handleitsort(e) {
    e.preventDefault();
    setModal(!modal)
  }

  function handecheckboxchange() {
    setIsChecked(!checked)
    if (!checked) {
      let sort = products.filter((item) => {
        return item.category === "men's clothing"
      })
      setProducts(sort)
    }else{
      fetchData();
    }
  }

  function handelwomenchange() {
    setIsCheckedwomen(!womenchecked)
    if (!womenchecked) {
      let sort = products.filter((item) => {
        return item.category === "women's clothing"
      })
      setProducts(sort)
    }else{
      fetchData();
    }
  }

  function handejewelery() {
    setJewerly(!jewelry)
    if (!jewelry) {
      let sort = products.filter((item) => {
        return item.category === "jewelery"
      })
      setProducts(sort)
    }else{
      fetchData();
    }
  }


  function Customizable(){
    setCustomize(!customize)
    if(!customize){
      let sort = products.sort((a,b)=>{
        return b.price - a.price;
      })
      setProducts(sort);
    }
    
  }






  return (
    <div className='lhsfilter-container'>

      {/* cutomize filter part */}
      <div className='mobilerescenter postop20px group-lhs-customize'>
        <input checked={customize} onChange={Customizable} className='checkboxlhs' type='checkbox' />
        <label className='black-colormain font-w700 uppercase-it'>Customizable</label>
      </div>

      {/* remaining all the filters */}

      {/* 1stidealfor */}
      <div className='for-filter-all-content'>
        <span onClick={handleitsort} className='flcolumnb elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>Ideal for</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>

          {modal && <span onClick={(e) => e.stopPropagation()} className='filteredItemcehckbox'>
            <span className='filtermenjust'>
              <label>Men</label>
              <input
                checked={checked}
                onChange={handecheckboxchange}
                type='checkbox' />
            </span>


            <span className='filtermenjust'>
              <label>Women</label>
              <input
                checked={womenchecked}
                onChange={handelwomenchange}
                type='checkbox' />
            </span>

            <span className='filtermenjust'>
              <label >Jewelery</label>
              <input checked={jewelry}
                onChange={handejewelery}
                type='checkbox' />
            </span>
          </span>}


        </span>



        {/* 2ndoccassion */}

        <span className='cursor-notallowed flcolumn  elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>Occassion</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 3rd work */}

        <span className='cursor-notallowed flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>work</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 4th fabric */}
        <span className='cursor-notallowed flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>fabric</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>

        {/* 5thr for segment  */}

        <span className='cursor-notallowed flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>segment</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* 6th for suitable for  */}

        <span className='cursor-notallowed flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>suitable for</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* rawmaterial */}
        <span className='cursor-notallowed flcolumn elementpandb'>
          <span className='group-single-filter'>
            <span className='uppercase-it font-w700'>raw materials</span>
            <span className='alignflex'>
              <Image src={dropdown} />
            </span>
          </span>
          <span>All</span>
        </span>


        {/* pattern */}
        <span className='cursor-notallowed flcolumn elementpandb'>
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
