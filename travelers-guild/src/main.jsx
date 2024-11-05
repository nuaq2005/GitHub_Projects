import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateChar from './pages/CreateChar.jsx'
import Gallery from './pages/Gallery.jsx'
import EditChar from './pages/EditChar.jsx'
import ReadChar from './pages/ReadChar.jsx'
import './index.css'
import App from './App.jsx'
import Sidebar from './components/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index={true} element={<App />} />
        <Route path="/create-character" element={<CreateChar />} />
        <Route path="/edit/:id" element={<EditChar />} />
        <Route path="/read/:id" element={<ReadChar />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
