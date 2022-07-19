import styled from 'styled-components';

interface Props{
    bgColor?:string
}
export const NavbarWrap = styled.nav<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    color:#fff;
    background-color: ${props => props.bgColor?props.bgColor:'#168AAD'};
    a{
        display: block;
        margin:10px;
        text-decoration: none;
    }
`