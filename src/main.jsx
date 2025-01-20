import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.jsx'
import {Provider} from  'react-redux'

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>

        <App />
      
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
