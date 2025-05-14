import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { HeaderWrap, NavWrap, MenuBar } from './style'
import { useGSAP } from '@gsap/react'
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
    path: 'work',
  },
  {
    name: 'About',
    path: 'about',
  },
  // {
  //   name: 'Github',
  //   path: 'https://github.com/t1123425',
  //   targetLink: true,
  // },
  // {
  //   name: 'CodePen',
  //   path: 'https://codepen.io/Tommax/',
  //   targetLink: true,
  // },
]

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navWrapRef = useRef<HTMLDivElement | null>(null)
  useGSAP(() => {
    const matchMedia = gsap.matchMedia()
    matchMedia.add('(max-width:768px)', () => {
      gsap.to(navWrapRef.current, {
        stagger: 0.5,
        display: menuOpen ? 'block' : 'none',
        opacity: menuOpen ? 1 : 0,
        duration: 1,
      })
    })
  }, [menuOpen])
  return (
    // #03045e
    <HeaderWrap bgColor="transparent">
      <MenuBar
        className={menuOpen ? 'active' : ''}
        size="35px"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <span className="bar"></span>
      </MenuBar>
      <NavWrap className="navWrap maxWidthContainer" ref={navWrapRef}>
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
