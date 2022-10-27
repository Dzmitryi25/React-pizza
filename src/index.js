import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Cart from './Cart';
import './scss/app.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>}/>
      <Route path='/cart' element={<Cart/>}
      />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);



