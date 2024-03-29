import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Work from './pages/Work'
import { About } from './pages/About'
import WorkDetail from './pages/WorkDetail'
import ScrollToTop from './helpers/ScrollTop'
import store from './store'
import 'purecss'
import './style/reset.local.css'
import './style/main.scss'
import App from './App'
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/my-portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:workName" element={<WorkDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
