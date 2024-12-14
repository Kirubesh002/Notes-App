import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import './style/common/button.css'
import './style/common/navBar.css'
import './style/common/common.css'
import './style/common/model.css'
import './style/common/notes.css'
import './style/common/modelCard.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
