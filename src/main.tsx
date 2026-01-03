import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HookFormProvider } from './Hook/HookFormProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HookFormProvider>
      <App />
    </HookFormProvider>
  </StrictMode>,
)
