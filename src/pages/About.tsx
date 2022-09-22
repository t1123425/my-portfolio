import React from 'react'
import { SkillList } from '../components/About'
import Head from '../assets/img/head.jpg'
export const About: React.FC = () => {
  return (
    <article className="maxWidthContainer pTop50 pSide98">
      <section>
        <h1 className="title bold borderBottom">About Me</h1>
        <div className="InfoContent flexContent column space-between">
          <div className="InfoBox halfBox text-center">
            <img src={Head} alt="HEAD" />
          </div>
          <div className="InfoBox">
            <p>My name is Tom Yuan, I am a front-end engineer from Taiwan.</p>
            <p>
              I have many years of experience in web development. I am good at
              optimizing web user experience and improving web performance.
              Besides being an engineer, I have also served as a teaching
              assistant for online programming teaching.
            </p>
            <p>
              I like to study and discuss new technologies and willing to help
              people solve problems. If you want to know more, you could watch
              my works. If you are interested, please contact with me.
            </p>
          </div>
        </div>
        <h2 className="title bold borderBottom">My Skill</h2>
        <SkillList />
      </section>
    </article>
  )
}
