import React, { memo } from 'react'
import { WorkList } from '../components/Work'

const Work: React.FC = () => {
  return (
    <section className="maxWidthContainer pTop50">
      <h1 className="title bold borderBottom">My Work</h1>
      <WorkList />
    </section>
  )
}

export default memo(Work)
