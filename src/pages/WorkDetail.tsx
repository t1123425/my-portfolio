import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
type RouteParams = {
  workName: string
}
const WorkDetail: React.FC = () => {
  const { workName } = useParams<RouteParams>()
  return (
    <section className="maxWidthContainer">
      <h1 className="title bold text-center">{workName}</h1>
    </section>
  )
}

export default memo(WorkDetail)
