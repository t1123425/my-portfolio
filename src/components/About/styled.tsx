import styled from 'styled-components'

export const SkillBlock = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  //grid-template-columns: auto 1fr;
  .skillTitle {
    font-size: 60px;
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
    /* @media (max-width: 768px) {
      grid-template-columns: 1fr;
    } */
    //grid-template-rows: repeat(3, 1fr);
    li {
      display: flex;
      align-items: center;
      font-size: 50px;
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
