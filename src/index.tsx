import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import 'purecss'
import './style/reset.local.css'
import './style/main.scss'

import App from './App'
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
