import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n/i18n.js'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import DocumentMeta from './components/DocumentMeta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <DocumentMeta />
      <App />
    </BrowserRouter>
  </StrictMode>,
)