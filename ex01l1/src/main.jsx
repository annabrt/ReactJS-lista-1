import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ola from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ola />
  </StrictMode>,
)
