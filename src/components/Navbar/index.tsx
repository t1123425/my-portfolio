import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarWrap } from './style'

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
export const Navbar: React.FC = () => (
  <NavbarWrap>
    <ul className="navLinksList">
      {NavLinksArr.map((e) => (
        <li>
          <NavLink to={e.path}>{e.name}</NavLink>
        </li>
      ))}
    </ul>
  </NavbarWrap>
)
