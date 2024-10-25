import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from '../routes/Layout.jsx';
import RecipeView from '../routes/RecipeView.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
  <Routes>
    <Route path = "/" element={<Layout />}>
      <Route index={true} element={<App />} />
    </Route>
    <Route index = {false} path="/RecipeDetails/:id" element={<RecipeView />} />
  </Routes>
</BrowserRouter>
  </StrictMode>,
)
