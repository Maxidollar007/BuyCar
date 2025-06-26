import { useState,useEffect } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider,Link, BrowserRouter } from 'react-router-dom'
import {Inscription} from  './pages/inscription/Inscription'
import { Home } from './pages/Acceuil/home'
import {About} from './pages/About/aout'
import {Money} from './pages/Service/money'
import {Prod} from './pages/Service/Produit'
import { Error } from './pages/errorpages'
import { Connexion } from './pages/inscription/connexion'
import { motion } from "motion/react"


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Service',
    element:<Prod/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/login',
    element:<Inscription/>
  },
  {
    path:'/Sign',
    element:<Connexion/>
  },
  {
    path:'/Money',
    element:<Money/>
  },
  {
    path:'*',
    element: <Error/>
  }
])




function App() {
  return  <>
      <RouterProvider router={router}/>
  </>
      
}
export default App
