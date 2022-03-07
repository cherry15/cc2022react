import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import reportWebVitals from './reportWebVitals'
import Footer from './features/footer/footer'
import Header from './features/header/header'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

const store = setupStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
