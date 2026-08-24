import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (root.children.length > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
