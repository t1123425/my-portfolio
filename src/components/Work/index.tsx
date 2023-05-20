import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getWorkDataArray } from '../../features/workData/selectors'
import { WorkListWrap, WorkBlock } from './style'

interface WorklistProps {
  workLimit?: number
}

const WorkList: React.FC<WorklistProps> = (props) => {
  let DataState = useSelector(getWorkDataArray)
  return (
    <WorkListWrap>
      {DataState.workDataArray.map((e: any, i: number) => {
        if (props.workLimit && i >= props.workLimit) return null
        return (
          <WorkBlock key={i} bgImg={e.imgSrc ? e.imgSrc : null}>
            <Link className="workTitle allEffect" to={`/work/${e.name}`}>
              <h2 className="title text-center">{e.name}</h2>
            </Link>
          </WorkBlock>
        )
      })}
    </WorkListWrap>
  )
}
export default WorkList
