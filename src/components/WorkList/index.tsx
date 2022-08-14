import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getWorkDataArray } from '../../features/workData/selectors'
const WorkList: React.FC = () => {
  let DataState = useSelector(getWorkDataArray)
  // setworkList([...workList, ...DataState.workDataArray])
  //console.log('workdata', DataState)
  useEffect(() => {
    console.log('worklist', DataState)
  }, [DataState])
  return (
    <div className="workListContent">
      <h1>work content</h1>
      {DataState.workDataArray.map((e: any, i: number) => {
        console.log('e', e)
        let workImg = null
        if (e.imgSrc) {
          workImg = <img src={e.imgSrc} alt={e.name} />
        }
        return (
          <div className="workBlock" key={i}>
            <h2>{e.name}</h2>
            {workImg}
          </div>
        )
      })}
    </div>
  )
}

export default WorkList
