import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateWorkData } from './features/workData/actions'
import axios from './plugins/axios'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import Home from './pages/Home'
import Work from './pages/Work'
import { initializeApp } from 'firebase/app'
// import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_API_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_API_ID}.firebaseio.com`,
  projectId: process.env.REACT_APP_API_ID,
  storageBucket: `${process.env.REACT_APP_API_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_API_SENDER_ID,
  appId: process.env.REACT_APP_ID,
}

// Initialize Firebase
// async function LoadStorageImg(path: string) {
//   const storage = getStorage()
//   const spaceRef = ref(storage, `${path}/demo1.png`)
//   try {
//     const imgUrl = await getDownloadURL(spaceRef)
//     console.log(imgUrl)
//   } catch (error) {
//     console.error(error)
//   }
// }
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
    // const workImg = await LoadStorageImg()
  } catch (error) {
    console.error(error)
  }
  // axios
  //   .get(process.env.REACT_APP_API_ID + '/databases/(default)/documents/work')
  //   .then((e) => {
  //     console.log('data', e)
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
}
const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    initializeApp(firebaseConfig)
    const asyncEnv = async () => {
      const dataArray = await LoadWorkData()
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
          <Route path="/about" component={About} />
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
