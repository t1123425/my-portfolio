import React, { Fragment, useEffect, useState } from 'react'
import { WorkList } from '../components/Work'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faCircleDown } from '@fortawesome/free-solid-svg-icons'
const Home: React.FC = () => {
  const [active, setActive] = useState(false)
  const [hide, setHide] = useState(false)
  const scrollControl = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight

    // const scrolled = winScroll / height
    // console.log(scrolled)
    if (winScroll >= 25) {
      setHide(true)
    } else {
      setHide(false)
    }
    console.log('height', winScroll)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollControl)
    setActive(true)
    return () => {
      window.removeEventListener('scroll', scrollControl)
    }
  }, [])
  return (
    <Fragment>
      <section className="viewHeight maxWidthContainer flex justifyCenter column pBottom50">
        <div className="showUpEffect">
          <h1 className={'item ' + (active && 'active')}>I'm Tom Yuan</h1>
        </div>
        <div className="showUpEffect">
          <h1 className={'item ' + (active && 'active')}>
            Front End Developer
          </h1>
        </div>
        <div
          className={
            'scrollDownIcon text-center floatEffect ' + (!hide && 'active')
          }
        >
          <FontAwesomeIcon icon={faCircleDown} />
          <span>Scroll Down</span>
        </div>
      </section>
      <section className="maxWidthContainer pSide98">
        <div className="text-center infoText">
          <p>Welcome to my portfolio,</p>
          <p>let's take look at my recent works & side projects below.</p>
        </div>
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
