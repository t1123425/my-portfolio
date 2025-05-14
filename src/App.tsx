import React, { useEffect, Fragment } from 'react'
import { Outlet, useMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateWorkData } from './features/workData/actions'
import axios from './plugins/axios'
import { LogoContent } from './components/Logo'
import { Navbar } from './components/Navbar'
import { initFireBase, getImgUrl } from './plugins/firebase'
import { WorkDataType } from './features/workData/types'
import { getWorkDataArray } from './features/workData/selectors'
import Contact from './pages/Contact'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)
async function LoadWorkData() {
  try {
    const storeData = await axios.get(
      process.env.REACT_APP_API_ID + '/databases/(default)/documents/work'
    )
    const workStoreData = storeData.data.documents
    let sortArray = []
    const dataArray = workStoreData.map((e: any) => {
      const workData = {
        name: e.fields.workName.stringValue,
        link: e.fields.worklink.stringValue,
        description: e.fields.workDescription.stringValue,
        imgSrc: '',
        workTech: e.fields.workTech.arrayValue.values.map(
          (d: any) => d.stringValue
        ),
        year: parseInt(e.fields.year.integerValue),
      }
      return workData
    })
    sortArray = dataArray.sort(
      (a: WorkDataType, b: WorkDataType) => b.year - a.year
    )
    return sortArray
  } catch (error) {
    console.error(error)
  }
}

const App: React.FC = () => {
  const dispatch = useDispatch()
  let DataState = useSelector(getWorkDataArray)
  // Initialize Firebase
  initFireBase()
  const asyncEnv = async () => {
    const workArray = await LoadWorkData()
    const dataArray = await Promise.all(
      workArray.map(async (e: WorkDataType) => {
        const imgSrc = await getImgUrl(e.name)
        return {
          ...e,
          imgSrc: imgSrc,
        }
      })
    )
    dispatch(updateWorkData(dataArray))
  }
  const bgRouteMatch = () => {
    const match = useMatch('/')
    return match ? true : false
  }
  useEffect(() => {
    if (DataState.workDataArray.length === 0) {
      asyncEnv()
    }
  }, [])

  return (
    <Fragment>
      <Navbar />
      <main className={'container ' + (!bgRouteMatch() && 'tyLogoBg')}>
        <LogoContent show={bgRouteMatch()} />
        <Outlet />
      </main>
      <Contact />
      <footer className="bg-w2 b-color">
        <p className="text-center">Copyright © 2025 Tom Yuan Website</p>
      </footer>
    </Fragment>
  )
}

export default App
