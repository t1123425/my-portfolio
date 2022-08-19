import React, { memo } from 'react'
import { WorkList } from '../components/Work'
const Work: React.FC = () => {
  return (
    <section className="maxWidthContainer">
      <h1 className="title bold text-center">My Work</h1>
      <WorkList />
    </section>
  )
}

export default memo(Work)
