import React, { Fragment, useEffect, useState } from 'react'
import { WorkList } from '../components/Work'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
const Home: React.FC = () => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(true)
  }, [])
  return (
    <Fragment>
      <section className="Intro maxWidthContainer flex justifyCenter column">
        <div className="showUpEffect">
          <h1 className={'item ' + (active && 'active')}>I'm Tom Yuan</h1>
        </div>
        <div className="showUpEffect">
          <h1 className={'item ' + (active && 'active')}>
            Front End Developer
          </h1>
        </div>
      </section>
      <section className="maxWidthContainer pSide98">
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
