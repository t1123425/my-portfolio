import React, { Fragment } from 'react'
import { About } from './About'

const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="maxWidthContainer flexCenter column">
        <h1>I'm Tom Yuan</h1>
        <h2>A front end developer</h2>
      </section>
      <About />
    </Fragment>
  )
}
export default Home
