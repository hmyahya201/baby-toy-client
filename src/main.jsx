import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router';
import CategoryProvider from './Provider/CategoryProvider/CategoryProvider';
import AuthProviders from './Provider/AuthProviders/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <CategoryProvider>
        <RouterProvider router={router}></RouterProvider>
      </CategoryProvider>
    </AuthProviders>
  </React.StrictMode>,
)
