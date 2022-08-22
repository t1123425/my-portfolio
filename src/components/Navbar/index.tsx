import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { gsap } from 'gsap'
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
function ToggleEffect(status: boolean) {
  let opacityNum = 1
  let displayStatus = 'block'
  if (!status) {
    opacityNum = 0
    displayStatus = 'none'
  }
  gsap.to('.navWrap', {
    stagger: 0.5,
    display: displayStatus,
    opacity: opacityNum,
    duration: 1,
  })
}
export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    ToggleEffect(menuOpen)
  }, [menuOpen])
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
      <NavWrap className="navWrap maxWidthContainer">
        <ul className="navLinksList">
          {NavLinksArr.map((e, i) => (
            <li key={i}>
              {e.targetLink ? (
                <a href={e.path} target="_blank">
                  {e.name}
                </a>
              ) : (
                <NavLink
                  to={e.path}
                  onClick={() => {
                    setMenuOpen(false)
                  }}
                >
                  {e.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </NavWrap>
    </HeaderWrap>
  )
}
