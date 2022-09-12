import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import store from './store'
import 'purecss'
import './style/reset.local.css'
import './style/main.scss'

import App from './App'
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:workName" element={<WorkDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
