import React from 'react'
import { InfoBlock, SkillList } from '../components/About'
import Head from '../assets/img/head.jpg'
export const About: React.FC = () => {
  const aboutMe = `My name is Tom Yuan,i am a front-end engineer from Taiwan. I have many years of experience
  in web development. I am good at optimizing web user experience and
  improving web performance. Besides being an engineer, I have also
  served as a teaching assistant for online programming teaching. I like
  to study and discuss new technologies. I am willing to help people
  solve problems. If you want to know more, you can watch my works. If
  you are interested, please contact with me.`
  return (
    <article className="maxWidthContainer pTop50 pSide98">
      <section>
        <h1 className="title bold borderBottom">About Me</h1>
        <InfoBlock info={aboutMe} imgSrc={Head} />
        <h2 className="title bold borderBottom">My Skill</h2>
        <SkillList />
      </section>
    </article>
  )
}
