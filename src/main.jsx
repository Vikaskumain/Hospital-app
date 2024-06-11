import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import Servics from './Components/Servics/Servics.jsx'
import News from './Components/News/News.jsx'
    


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/service",
        element: <Servics />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
