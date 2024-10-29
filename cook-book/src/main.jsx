import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RecipeView from '../routes/RecipeView.jsx';
import App from './App.jsx'
import './index.css'
import Sidebar from './components/SideBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Sidebar />
  <Routes>
      <Route index={true} element={<App />} />
    <Route index = {false} path="/RecipeDetails/:id" element={<RecipeView />} />
  </Routes>
</BrowserRouter>
  </StrictMode>,
)
