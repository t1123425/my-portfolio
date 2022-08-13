import React from 'react'
import { useSelector } from 'react-redux'
import { getWorkDataArray } from '../../features/workData/selectors'
const WorkList: React.FC = () => {
  const DataState = useSelector(getWorkDataArray)
  console.log('workdata', DataState)
  return (
    <div className="workListContent">
      <h1>work content</h1>
      {DataState.workDataArray.map((e: any, i: number) => {
        return (
          <div className="workBlock" key={i}>
            <h2>{e.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default WorkList
