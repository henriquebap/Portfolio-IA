import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import '../oficina/oficina.css'
import Planos from './Planos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Planos />
    </MotionConfig>
  </StrictMode>,
)
