import React, { Fragment } from 'react'
import { About } from './About'

const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="Intro maxWidthContainer flex justifyCenter column">
        <h1>I'm TY</h1>
        <h1>A front end developer</h1>
      </section>
      <About />
    </Fragment>
  )
}
export default Home
