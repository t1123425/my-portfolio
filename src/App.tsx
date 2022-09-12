import React, { useEffect, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateWorkData } from './features/workData/actions'
import axios from './plugins/axios'
import { LogoContent } from './components/Logo'
import { Navbar } from './components/Navbar'
import { initFireBase, getImgUrl } from './plugins/firebase'
import { WorkDataType } from './features/workData/types'

async function LoadWorkData() {
  try {
    const storeData = await axios.get(
      process.env.REACT_APP_API_ID + '/databases/(default)/documents/work'
    )
    const workStoreData = storeData.data.documents
    //console.log('storeDATA', workStoreData)
    const dataArray = workStoreData.map((e: any) => {
      const workData = {
        name: e.fields.workName.stringValue,
        link: e.fields.worklink.stringValue,
        description: e.fields.workDescription.stringValue,
        imgSrc: '',
      }
      return workData
    })
    return dataArray
  } catch (error) {
    console.error(error)
  }
}
const App: React.FC = () => {
  const dispatch = useDispatch()
  // Initialize Firebase
  initFireBase()
  useEffect(() => {
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
    asyncEnv()
  }, [])

  return (
    <Fragment>
      <Navbar />
      <LogoContent background="#03045e" />
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <p className="text-center">Copyright © 2022 Tom Yuan Website</p>
      </footer>
    </Fragment>
  )
}

export default App
