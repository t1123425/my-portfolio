import styled from 'styled-components'

interface HeaderProps {
  bgColor?: string
  color?: string
}
interface MenuProps {
  size?: string
}
export const HeaderWrap = styled.header<HeaderProps>`
  ---shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.59);
  padding: 10px;
  width: 100%;
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#168AAD')};
  filter: saturate(100%);
  -webkit-backdrop-filter: blur(88px);
  backdrop-filter: blur(88px);
  /* box-shadow: var(---shadow);
  -webkit-box-shadow: var(---shadow);
  -moz-box-shadow: var(---shadow); */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`
export const NavWrap = styled.nav`
  height: auto;
  position: static;
  background-color: inherit;
  overflow: hidden;
  .navLinksList {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .navLinksList li {
    margin: 3px 16.5px;
  }
  .navLinksList a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: 1.56rem;
    padding-bottom: 5px;
    box-sizing: border-box;
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      transition: width 0.5s;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    line-height: 1.5;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #0077b6;
    opacity: 0;
    /* &.active {
      height: 100vh;
    } */
    .navLinksList {
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
    .navLinksList a {
      font-size: 18vw;
    }
  }
`
export const MenuBar = styled.div<MenuProps>`
  display: none;
  position: relative;
  width: ${(props) => (props.size ? props.size : '50px')};
  height: ${(props) => (props.size ? props.size : '50px')};
  z-index: 3;
  cursor: pointer;
  .bar {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    border: 5px solid #fff;
    border-left: 0;
    border-right: 0;
    transition: all 0.5s;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 5px;
      background-color: #fff;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    height: 5px;
    border-radius: 5px;
    background-color: #fff;
    transform-origin: 2px 50%;
    transition: all 0.5s;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    bottom: 0;
    transform: rotate(-45deg);
  }
  &.active {
    &::before,
    &::after {
      width: 135%;
    }
    .bar {
      width: 0;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`
