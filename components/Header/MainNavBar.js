import React from 'react';
import logo from '../../public/logo.svg';
import search from '../../public/search.svg';
import heart from "../../public/heart.svg"
import shopping from "../../public/shopping.svg"
import profileImg from "../../public/profile.svg"
import ENG from "../../public/ENG.svg"
import DropDown from "../../public/dropdown.svg"
import hamburg from "../../public/hambur.svg"



import Image from 'next/image';

const MainNavBar = () => {
  return (
    <div className='main-nav-container'>

      <div className='logocumburger'>
        <div className='foronlymobile'>
          <Image src={hamburg} alt='logo-image' />
        </div>
        <div>
          <Image className='curpointer' src={logo} alt=' logo-image' />
        </div>
      </div>

      <div className='marginleft172px'>
        <h1>Logo</h1>
      </div>

      <div className='right-side-links'>
        <span>
          <Image className='curpointer' src={search} />
        </span>
        <span>
          <Image className='curpointer' src={heart} />
        </span>
        <span>
          <Image className='curpointer' src={shopping} />
        </span>
        <span>
          <Image className='curpointer' src={profileImg} />
        </span>
        <span  className='curpointer doflexandalcenter'>
          <Image src={ENG} />
          <Image src={DropDown} />
        </span>
      </div>
    </div>

  );
}

export default MainNavBar;
