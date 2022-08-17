import styled from 'styled-components'

interface WorkBlockProp {
  bgImg?: string
}

export const WorkListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`

export const WorkBlock = styled.div<WorkBlockProp>`
  display: inline-block;
  width: 32.5%;
  min-height: 300px;
  position: relative;
  box-sizing: border-box;
  margin: 5px;
  cursor: pointer;
  background-color: #ccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => (props ? props.bgImg : 'none')});
  .workTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
  }
`
