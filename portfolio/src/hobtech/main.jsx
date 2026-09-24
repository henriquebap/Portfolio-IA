import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/brand.css'
import HobTech from './HobTech'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HobTech />
  </StrictMode>,
)
