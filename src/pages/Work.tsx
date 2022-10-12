import React, { Suspense, lazy, memo } from 'react'
// import { WorkList } from '../components/Work'
const WorksList = lazy(() => import('../components/Work'))

const Work: React.FC = () => {
  return (
    <section className="maxWidthContainer pTop50 pSide98">
      <h1 className="title bold borderBottom">My Work</h1>
      <Suspense
        fallback={<p className="text-center bold">Loading Works....</p>}
      >
        <WorksList />
      </Suspense>
    </section>
  )
}

export default memo(Work)
