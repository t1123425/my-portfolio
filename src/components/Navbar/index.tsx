import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { HeaderWrap, NavWrap, MenuBar } from './style'

interface NavLinks {
  name: string
  path: string
  targetLink?: boolean
}
const NavLinksArr: NavLinks[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Github',
    path: 'https://github.com/t1123425',
    targetLink: true,
  },
  {
    name: 'CodePen',
    path: 'https://codepen.io/Tommax/',
    targetLink: true,
  },
]
export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setMenuOpen(false)
  }, [location])
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
      <NavWrap className={'maxWidthContainer ' + (menuOpen ? 'active' : '')}>
        <ul className="navLinksList">
          {NavLinksArr.map((e, i) => (
            <li key={i}>
              {e.targetLink ? (
                <a href={e.path} target="_blank">
                  {e.name}
                </a>
              ) : (
                <NavLink to={e.path}>{e.name}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </NavWrap>
    </HeaderWrap>
  )
}
