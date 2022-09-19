import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faCodepen,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
const Contract: React.FC = () => {
  return (
    <section className="contactContent bg-w b-color">
      <div className="maxWidthContainer pSide98">
        <h2 className="mainTitle text-center">Contact Me !</h2>
        <ul className="contactList">
          <li className="text-center">
            <a
              href="mailto:t1123425@gmail.com"
              className="email"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <br />
              <strong>t1123425@gmail.com</strong>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tom-yuan-61433689"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>Linkedln</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/t1123425" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Tommax/" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
              <span>Codepen</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default memo(Contract)
