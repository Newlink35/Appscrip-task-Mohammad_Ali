"use-client"


import React, { useEffect, useState } from 'react'
import HeaderMain from './Header/HeaderMain'
import CombinedDiv from './DiscoverContent/CombinedDiv'
import FilteredHeadCombine from './FilteredHeading/FilteredHeadCombine'
import ProductCumFilter from './produccumfilter/ProductCumFilter'
import FooterMain from './FooterPart/FooterMain'

const MainComp = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      console.log(json);
      setProducts(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-frame white-colormain'>
      {/* All header files are in hear */}
      <HeaderMain />

      {/* BoxMiddleInHear  */}
      <CombinedDiv />


      {/* filterheading*/}
      <FilteredHeadCombine showFilter={showFilter} setShowFilter={setShowFilter} products={products} setProducts={setProducts}  />


      {/* for aside filter and right product */}
      <ProductCumFilter showFilter={showFilter} setShowFilter={setShowFilter} products={products} setProducts={setProducts} fetchData={fetchData} loading={loading} />

      {/* This is the footer part of it  */}
      <FooterMain />
    </div>
  )
}

export default MainComp
