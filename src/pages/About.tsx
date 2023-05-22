import React, { Fragment, useState } from 'react'
import { SkillList } from '../components/About'
import { InfoBox, LangBox } from '../components/About/styled'
import Head from '../assets/img/head.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
interface Langs {
  langType: string
  text: string
  context: string
}
const langData: Langs[] = [
  {
    langType: 'ch',
    text: '中',
    context: `你好! 我叫Tom yuan，我是來自台灣的前端工程師，在網頁開發領域上已有多年經驗，擅長優化網頁使用者體驗與改善網頁執行效能，熟悉網頁前端開發的各種生態工具，曾經手開發過多種線上產品(ex:Dashborad系統,客戶形象官網,大型博彩平台等)，
    我喜歡研究討論新技術也樂於幫助人解決問題，除了工程師經歷也擔任線上程式教學的助教，想了解更多可以觀摩我的作品，若有興趣合作也能透過我的信箱或linkedin與我聯絡。`,
  },
  {
    langType: 'en',
    text: 'EN',
    context: `My name is Tom Yuan, I am a front-end engineer from Taiwan. I have many years of experience in web development and good at optimizing web user experience and improving web performance.
    I like to study and discuss new technologies and willing to help people solve problems. besides being an engineer, I have also served as a teaching assistant for online programming teaching.
    If you are interested in my work and experience, you can also contact me through my email or linkedin.`,
  },
]
export const About: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('ch')
  return (
    <article className="maxWidthContainer pTop50 pSide98">
      <section>
        <h1 className="title bold borderBottom">About Me</h1>
        <LangBox>
          <FontAwesomeIcon icon={faLanguage} />
          {langData.map((e, i) => {
            return (
              <span
                key={i}
                className={
                  'langBtn ' + (e.langType === currentLang && 'active')
                }
                onClick={() => {
                  setCurrentLang(e.langType)
                }}
              >
                {e.text}
              </span>
            )
          })}
        </LangBox>
        <div className="InfoContent flexContent column space-between">
          <InfoBox className="halfBox text-center">
            <img src={Head} alt="HEAD" />
          </InfoBox>
          <InfoBox>
            {langData.map((e, i) => {
              if (e.langType === currentLang) {
                return <Fragment key={i}>{e.context}</Fragment>
              }
            })}
          </InfoBox>
        </div>
        <h2 className="title bold borderBottom">My Skill</h2>
        <SkillList />
      </section>
    </article>
  )
}
