import styled from 'styled-components'

interface HeaderProps {
  bgColor?: string
  color?: string
}
interface MenuProps {
  size?: string
}
export const HeaderWrap = styled.header<HeaderProps>`
  padding: 20px;
  width: 100%;
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#168AAD')};
`
export const NavWrap = styled.nav`
  .navLinksList {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .navLinksList li {
    margin: 10px;
  }
  .navLinksList a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    line-height: 1.5;
    .navLinksList {
      flex-direction: column;
      height: 0;
      overflow: hidden;
      &.active {
        height: auto;
      }
    }
  }
`
export const MenuBar = styled.div<MenuProps>`
  display: none;
  position: relative;
  width: ${(props) => (props.size ? props.size : '50px')};
  height: ${(props) => (props.size ? props.size : '50px')};
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
