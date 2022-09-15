import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getWorkData } from '../features/workData/selectors'
import { useParams } from 'react-router-dom'
import { WorkInfoBlock } from '../components/Work/style'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
type RouteParams = {
  workName: string
}
const WorkDetail: React.FC = () => {
  const { workName } = useParams<RouteParams>()
  const history = useNavigate()
  let workData = useSelector(getWorkData(workName || ''))
  // console.log('work', workData)
  return (
    <section className="maxWidthContainer pTop50">
      <h1 className="title bold text-center">{workName}</h1>
      <WorkInfoBlock>
        <img src={workData?.imgSrc || null} alt={workName} />
      </WorkInfoBlock>
      <WorkInfoBlock>
        <div className="workBox">
          <span>Year:</span>
          <span>{workData?.year}</span>
        </div>
        <div className="workBox">
          <span>Tech:</span>
          <div>
            {workData?.workTech.map((e: string, i: number) => {
              return <span key={i}>{e}</span>
            })}
          </div>
        </div>
        <p>{workData?.description}</p>
        {workData?.link ? (
          <a href={workData.link} className="linkBtn" target="_blank">
            Visit Site
          </a>
        ) : null}
      </WorkInfoBlock>
      <button
        className="btn backPage"
        onClick={(e) => {
          e.preventDefault()
          history('/work')
        }}
      >
        <FontAwesomeIcon icon={faLeftLong} />
        <span>Back To work Page</span>
      </button>
    </section>
  )
}

export default memo(WorkDetail)
