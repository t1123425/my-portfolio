import React, { Fragment } from 'react'
import { WorkList } from '../components/Work'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="Intro maxWidthContainer flex justifyCenter column">
        <h1>I'm Tom Yuan</h1>
        <h1>Front End Developer</h1>
      </section>
      <section className="maxWidthContainer">
        {/* <p>Hi!there ,welcome to my portfolio, </p> */}
        <h1 className="title bold borderBottom text-center">
          My Recently Works
        </h1>
        <WorkList workLimit={4} />
        <Link to="/work" className="btn morework text-center">
          <FontAwesomeIcon icon={faGripVertical} />
          <span>More works</span>
        </Link>
      </section>
    </Fragment>
  )
}
export default Home
