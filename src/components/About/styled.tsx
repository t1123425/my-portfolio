import styled from 'styled-components'

export const InfoBox = styled.div`
  font-size: 25px;
  box-sizing: border-box;
  letter-spacing: 0.3px;
  p {
    //margin-bottom: 10px;
    padding: 10px;
  }
  img {
    border-radius: 50%;
    max-width: 420px;
    width: 100%;
    margin: 50px auto;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const SkillBlock = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  font-size: 25px;
  //grid-template-columns: auto 1fr;
  .skillTitle {
    font-size: 1.5em;
    border-bottom: 5px solid #0077b6;
    margin-bottom: 10px;
    span {
      margin-left: 10px;
    }
  }
  .skillList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    li {
      display: flex;
      align-items: center;
      font-size: 1em;
      &:before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 8px;
        background-color: #0077b6;
        margin-right: 8px;
      }
    }
  }
`
