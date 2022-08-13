import React, { memo } from 'react'
import WorkList from '../components/WorkList'
const Work: React.FC = () => {
  return (
    <section className="max-width-container">
      <h1>My Work</h1>
      <WorkList />
    </section>
  )
}

export default memo(Work)
