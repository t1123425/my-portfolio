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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const WorkInfoBlock = styled.div`
  padding: 0 10px;
  font-size: 1.5rem;
  flex: 1;
  .imgBlock {
    max-width: 80%;
    margin: auto;
  }
  img {
    border-radius: 25px;
    width: 100%;
    min-height: 300px;
  }
  p {
    margin: 30px auto;
  }
  .workBox {
    display: flex;
    margin: 10px auto;
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .linkBtn {
    display: block;
    padding: 20px;
    border-radius: 25px;
    background-color: #fff;
    color: #0077b6;
    width: 100%;
    max-width: 241px;
    text-align: center;
    margin: 50px auto;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const WorkBlock = styled.div<WorkBlockProp>`
  display: inline-block;
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
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      color: #0077b6;
    }
  }
`
