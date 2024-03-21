import Image from 'next/image'
import React from 'react'
import LoremImg from '../../public/loremipsum.png';

const NavbarBlack = () => {
  return (
    <div>
      <div className='NavBarBlackParent blackbackground'>
        <li className='positionrelative'>
          <span className='lorempositionabsolute'><Image src={LoremImg} />
          </span>
          <span>Lorem ipsum dolor</span>
        </li>

        <li className='positionrelative'>
          <span className='lorempositionabsolute'><Image src={LoremImg} />
          </span>
          <span>Lorem ipsum dolor</span>
        </li>

        <li className='positionrelative'>
          <span className='lorempositionabsolute'><Image src={LoremImg} />
          </span>
          <span>Lorem ipsum dolor</span>
        </li>


      </div>
    </div>
  )
}

export default NavbarBlack
