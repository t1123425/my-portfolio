import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrap, NavWrap, MenuBar } from './style'

interface NavLinks {
  name: string
  path: string
}
const NavLinksArr: NavLinks[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Work',
    path: '/work',
  },
]
export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <HeaderWrap bgColor="#013a63">
      <MenuBar
        className={menuOpen ? 'active' : ''}
        size="35px"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <span className="bar"></span>
      </MenuBar>
      <NavWrap className="max-width-container">
        <ul className={'navLinksList ' + (menuOpen ? 'active' : '')}>
          {NavLinksArr.map((e) => (
            <li>
              <NavLink to={e.path}>{e.name}</NavLink>
            </li>
          ))}
        </ul>
      </NavWrap>
    </HeaderWrap>
  )
}
