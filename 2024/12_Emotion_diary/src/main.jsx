import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // BrowserRouter의 역할 : 브라우저의 현재 주소를 저장하고 감지하는 역할
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
