import styled from 'styled-components'

interface Props {
  bgColor?: string
}
export const NavbarWrap = styled.nav<Props>`
  padding: 20px;
  width: 100%;
  color: #fff;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#168AAD')};
  .navLinksList {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navLinksList li {
    margin: 10px;
  }
  .navLinksList a {
    display: block;
    text-decoration: none;
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
export const MenuBar = styled.span`
  display: none;
  position: relative;
  width: 50px;
  height: 50px;
  border: 10px solid #fff;
  border-right: none;
  border-left: none;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: #fff;
    color: #fff;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  &.active {
    border-top: none;
    border-bottom: none;
    &::before {
      content: 'x';
      background-color: transparent;
    }
  }
  @media (max-width: 768px) {
    display: inline-block;
  }
`
