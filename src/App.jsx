import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Rootlayout from './component/layout/Rootlayout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component:Rootlayout,
      children: [
        { index: true, Component: HomePage },
        {path:"shop" , Component: ShopPage},
      ],
    },
  ]);
  
  return (
  <RouterProvider router={router}/>
  )
}

export default App