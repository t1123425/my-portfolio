import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateWorkData } from './features/workData/actions'
import axios from './plugins/axios'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
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
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/work" component={Work} />
        </Switch>
      </main>
      <footer>
        <p className="text-center">Copyright © 2022 Tom Yuan Website</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
