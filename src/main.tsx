import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeContextProvider} from "./context/ThemeContextProvider.tsx";
import {ConstUserProvuder} from "./context/ConstUserProvuder.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeContextProvider>
          <ConstUserProvuder>
    <App />
          </ConstUserProvuder>
      </ThemeContextProvider>

  </StrictMode>,
)
