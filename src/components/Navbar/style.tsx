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
    .navLinksList {
      flex-direction: column;
      height: 0;
      overflow: hidden;
    }
  }
`
