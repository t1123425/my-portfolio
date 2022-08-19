import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
        // console.log('e', e)
        return (
          <WorkBlock key={i} bgImg={e.imgSrc ? e.imgSrc : null}>
            <h2 className="workTitle">{e.name}</h2>
          </WorkBlock>
        )
      })}
    </WorkListWrap>
  )
}
