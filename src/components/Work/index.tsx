import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getWorkDataArray } from '../../features/workData/selectors'
import { WorkListWrap, WorkBlock } from './style'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface WorklistProps {
  workLimit?: number
}

const WorkList: React.FC<WorklistProps> = (props) => {
  let DataState = useSelector(getWorkDataArray)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const wrapRef = useRef<HTMLDivElement | null>(null)
  useGSAP(
    () => {
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        delay: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      })
    },
    { scope: wrapRef }
  )
  return (
    <WorkListWrap ref={wrapRef}>
      {DataState.workDataArray.map((e: any, i: number) => {
        if (props.workLimit && i >= props.workLimit) return null
        return (
          <WorkBlock
            key={i}
            bgImg={e.imgSrc ? e.imgSrc : null}
            ref={(el) => {
              itemsRef.current[i] = el
            }}
          >
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
