import React from 'react'
interface InfoProps {
  imgSrc?: string
  info: string
}
export const InfoBlock: React.FC<InfoProps> = (props) => {
  return (
    <div className="InfoContent flexContent column space-between">
      <div className="InfoBox halfBox text-center">
        <img src={props.imgSrc} alt="InfoImg" />
      </div>
      <div className="InfoBox">
        <p>{props.info}</p>
      </div>
    </div>
  )
}
export const SkillList: React.FC = () => {
  return (
    <div className="flexContent space-between">
      <div className="skillBlock">
        <h2>FrontEnd</h2>
        <ul>
          <li>HTML/CSS(SCSS)</li>
          <li>Javascript(ES6)</li>
          <li>Typescript</li>
          <li>Vue/Vue Router/VUEX</li>
          <li>React/React Router/Redux</li>
          <li>Bootstrap/Tailwind</li>
          <li>
            Web3.js
            <span>(In Progress)</span>
          </li>
        </ul>
      </div>
      <div className="skillBlock">
        <h2>BackEnd</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Heroku</li>
          <li>Docker</li>
        </ul>
      </div>
      <div className="skillBlock">
        <h2>Others</h2>
        <ul>
          <li>Webpack</li>
          <li>NPM</li>
          <li>GIT(HUB)</li>
          <li>
            Solidity
            <span>(In Progress)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
