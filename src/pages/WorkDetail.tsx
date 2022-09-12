import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getWorkData } from '../features/workData/selectors'
import { useParams } from 'react-router-dom'
import { WorkInfoBlock } from '../components/Work/style'
import { useNavigate } from 'react-router-dom'
type RouteParams = {
  workName: string
}
const WorkDetail: React.FC = () => {
  const { workName } = useParams<RouteParams>()
  const history = useNavigate()
  let workData = useSelector(getWorkData(workName || ''))
  return (
    <section className="maxWidthContainer">
      <h1 className="title bold text-center">{workName}</h1>
      <WorkInfoBlock>
        <img src={workData?.imgSrc || null} alt={workName} />
      </WorkInfoBlock>
      <WorkInfoBlock>
        <p>{workData?.description}</p>
        {workData?.link ? (
          <a href={workData.link} className="linkBtn" target="_blank">
            Visit Site
          </a>
        ) : null}
      </WorkInfoBlock>
      <button
        onClick={(e) => {
          e.preventDefault()
          history('/work')
        }}
      >
        {'<= back to work'}
      </button>
    </section>
  )
}

export default memo(WorkDetail)
