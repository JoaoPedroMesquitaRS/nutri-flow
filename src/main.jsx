import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Pages
import FlowTeste from './pages/FlowPage.jsx';
import DietasPage from './pages/DietasPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: 'flow', element: <FlowTeste /> },
      { path: 'dietas', element: <DietasPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)