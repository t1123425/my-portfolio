import styled from 'styled-components'

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`
export const CircleLoader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUp 1s linear infinite;
  }
  @keyframes scaleUp {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    60%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes pulse {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
  }
`
