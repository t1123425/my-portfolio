import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from './plugins/axios'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import Home from './pages/Home'
import Work from './pages/Work'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
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
function LoadStorageImg() {
  initializeApp(firebaseConfig)
  const storage = getStorage()
  const spaceRef = ref(storage, 'AppDownloadPlatform/demo1.png')
  getDownloadURL(spaceRef).then((url) => {
    console.log('url', url)
  })
}
function LoadWorkData() {
  axios
    .get(process.env.REACT_APP_API_ID + '/databases/(default)/documents/work')
    .then((e) => {
      console.log('data', e)
      LoadStorageImg()
    })
    .catch((err) => {
      console.error(err)
    })
}
const App: React.FC = () => {
  useEffect(() => {
    LoadWorkData()
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
