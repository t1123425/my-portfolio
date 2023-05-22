import styled from 'styled-components'

export const SvgLogo = styled.svg`
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;

  &.hide {
    path {
      -webkit-animation: re-dash 0.1s linear forwards;
      animation: re-dash 0.1s linear forwards;
      animation-direction: reverse;
    }
  }
  path {
    stroke: #fff;
    stroke-width: 10;
    stroke-dasharray: 50000;
    stroke-dashoffset: -50000;
    -webkit-animation: dash 2.5s linear forwards;
    animation: dash 2.5s linear forwards;
    fill-opacity: 0;
  }
  @-webkit-keyframes dash {
    75% {
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 1;
      stroke-opacity: 0;
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    75% {
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 1;
      stroke-opacity: 0;
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes re-dash {
    75% {
      fill-opacity: 1;
      stroke-opacity: 0;
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }
  @keyframes re-dash {
    75% {
      fill-opacity: 1;
      stroke-opacity: 0;
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }
`
