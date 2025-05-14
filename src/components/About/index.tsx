import React, { useRef } from 'react'
import { SkillBlock } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faCode,
  faServer,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

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
  const skillWrapRef = useRef<HTMLDivElement | null>(null)
  const skillBoxRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      skillBoxRef.current.forEach((box, i) => {
        if (!box) return
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: 'top 70%', // box 到達畫面高度 70% 的位置時開始
            toggleActions: 'play none none none', // 只播放一次
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.2, // 讓每個技能框 stagger 一點點
        })
      })
    },
    { scope: skillWrapRef }
  )
  const skillData: SkillTypes[] = [
    {
      name: 'FrontEnd',
      skills: [
        'HTML/CSS(SCSS/Less)',
        'Javascript(ES6)',
        'Typescript',
        'Bootstrap',
        'TailwindCSS',
        'Styled-component',
        'React/React Router/Redux',
        'Vue/Vue Router/VUEX',
        'GSAP',
      ],
      icon: faCode,
    },
    {
      name: 'BackEnd',
      skills: ['Node.js', 'Express.js', 'Firebase', 'Nginx', 'MongoDB'],
      icon: faServer,
    },
    {
      name: 'Others',
      skills: ['Webpack', 'NPM', 'GIT', 'GitLab CI/CD'],
      icon: faScrewdriverWrench,
    },
  ]
  return (
    <div className="flexContent column space-between" ref={skillWrapRef}>
      {skillData.map((e, i) => {
        return (
          <SkillBlock
            className="bg-w b-color"
            key={i}
            ref={(el) => {
              skillBoxRef.current[i] = el
            }}
          >
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
