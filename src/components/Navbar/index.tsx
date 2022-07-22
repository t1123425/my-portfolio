import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarWrap, MenuBar } from './style'

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
    <NavbarWrap bgColor="#013a63">
      <MenuBar
        className={menuOpen ? 'active' : ''}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      ></MenuBar>
      <ul className={'navLinksList ' + (menuOpen ? 'active' : '')}>
        {NavLinksArr.map((e) => (
          <li>
            <NavLink to={e.path}>{e.name}</NavLink>
          </li>
        ))}
      </ul>
    </NavbarWrap>
  )
}
