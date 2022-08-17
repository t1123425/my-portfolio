import React from 'react'
// import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
  // const history = useHistory()

  return (
    <article className="maxWidthContainer">
      <section>
        <h1>About Me</h1>
        <p>
          I am a front-end engineer from Taiwan. I have many years of experience
          in web development. I am good at optimizing web user experience and
          improving web performance. Besides being an engineer, I have also
          served as a teaching assistant for online programming teaching. I like
          to study and discuss new technologies. I am willing to help people
          solve problems. If you want to know more, you can watch my works. If
          you are interested, please contact to me.
        </p>
      </section>
      <section>
        <h1>My Skill</h1>
        <div className="skillBlock">
          <ul>
            <li>HTML5</li>
            <li>CSS3/SCSS</li>
            <li></li>
          </ul>
        </div>
      </section>
      {/* <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button> */}
    </article>
  )
}
