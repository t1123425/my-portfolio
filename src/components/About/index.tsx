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
        <ul>
          <li>HTML/CSS</li>
          <li>SCSS</li>
          <li>Javascript(ES6)</li>
          <li>Typescript</li>
          <li>
            Solidity
            <span>(on progress)</span>
          </li>
        </ul>
      </div>
      <div className="skillBlock">
        <ul>
          <li>Vue/Vue Router/VUEX</li>
          <li>React/React Router/Redux</li>
          <li>Bootstrap/Tailwind</li>
          <li>Webpack</li>
          <li>NPM</li>
          <li>GIT(HUB)</li>
          <li>
            Web3.js
            <span>(on progress)</span>
          </li>
        </ul>
      </div>
      <div className="skillBlock">
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Heroku</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  )
}
