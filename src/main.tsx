import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode >,
)
