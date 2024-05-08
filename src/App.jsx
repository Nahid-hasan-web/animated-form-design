import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import LoginPage from './Pages/LoginPage';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
          
          <Route> 
            <Route path='/' element={<LoginPage/>} />
          </Route>
    )
  );

  return (
    <>
    

      <RouterProvider router={routes} />
    </>
  )
}

export default App