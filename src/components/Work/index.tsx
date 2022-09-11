import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getWorkDataArray } from '../../features/workData/selectors'
import { WorkListWrap, WorkBlock } from './style'
export const WorkList: React.FC = () => {
  let DataState = useSelector(getWorkDataArray)
  useEffect(() => {
    // console.log('worklist', DataState)
  }, [DataState])
  return (
    <WorkListWrap>
      {DataState.workDataArray.map((e: any, i: number) => {
        return (
          <WorkBlock key={i} bgImg={e.imgSrc ? e.imgSrc : null}>
            <Link className="workTitle" to={`/work/${e.name}`}>
              <h2>{e.name}</h2>
            </Link>
          </WorkBlock>
        )
      })}
    </WorkListWrap>
  )
}
