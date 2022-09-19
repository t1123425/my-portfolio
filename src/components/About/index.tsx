import React from 'react'
import { SkillBlock } from './styled'
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
interface SkillTypes {
  name: string
  skills: string[]
}
export const SkillList: React.FC = () => {
  const skillData: SkillTypes[] = [
    {
      name: 'FrontEnd',
      skills: [
        'HTML/CSS(SCSS)',
        'Javascript(ES6)',
        'Typescript',
        'Bootstrap',
        'Tailwind',
        'React/React Router/Redux',
        'Vue/Vue Router/VUEX',
      ],
    },
    {
      name: 'BackEnd',
      skills: ['Node.js', 'Express.js', 'Heroku', 'Docker'],
    },
    {
      name: 'Others',
      skills: ['Webpack', 'NPM', 'GIT(HUB)', 'Docker'],
    },
  ]
  return (
    <div className="flexContent column space-between">
      {skillData.map((e, i) => {
        return (
          <SkillBlock className="bg-w b-color" key={i}>
            <h2 className="skillTitle">{e.name}</h2>
            <ul className="skillList">
              {e.skills.map((d, di) => (
                <li key={di}>{d}</li>
              ))}
            </ul>
          </SkillBlock>
        )
      })}
    </div>
  )
}
