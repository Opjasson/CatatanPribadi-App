import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavbarBody from './Components/Navbar/NavbarBody.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarBody />
  </StrictMode>,
)
