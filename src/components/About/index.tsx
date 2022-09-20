import React from 'react'
import { SkillBlock } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faCode,
  faServer,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
interface InfoProps {
  imgSrc?: string
  info?: string
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
  icon: IconDefinition
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
      icon: faCode,
    },
    {
      name: 'BackEnd',
      skills: ['Node.js', 'Express.js', 'Heroku', 'Docker'],
      icon: faServer,
    },
    {
      name: 'Others',
      skills: ['Webpack', 'NPM', 'GIT(HUB)', 'Docker'],
      icon: faScrewdriverWrench,
    },
  ]
  return (
    <div className="flexContent column space-between">
      {skillData.map((e, i) => {
        return (
          <SkillBlock className="bg-w b-color" key={i}>
            <h2 className="skillTitle">
              <FontAwesomeIcon icon={e.icon} />
              <span>{e.name}</span>
            </h2>
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
