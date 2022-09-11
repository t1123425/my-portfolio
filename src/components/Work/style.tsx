import styled from 'styled-components'

interface WorkBlockProp {
  bgImg?: string
}

export const WorkListWrap = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 350px;
  grid-gap: 10px;
  padding: 0 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const WorkBlock = styled.div<WorkBlockProp>`
  display: inline-block;
  /* min-height: 300px; */
  position: relative;
  box-sizing: border-box;
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
`
