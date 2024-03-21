import React from 'react'
import MainNavBar from './MainNavBar'
import NavbarBlack from './NavbarBlack'
import NavLinks from './NavLinks'

const HeaderMain = () => {
  return (
    <div>
      <NavbarBlack />
      <MainNavBar />
      <NavLinks />
    </div>
  )
}

export default HeaderMain
