import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/authContext.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <App />
      <SpeedInsights />
    </AuthContext>
  </StrictMode>,
)
