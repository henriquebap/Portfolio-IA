import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './oficina.css'
import Oficina from './Oficina'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Oficina />
    </MotionConfig>
  </StrictMode>,
)
