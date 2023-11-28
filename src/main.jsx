import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import AuthProvider from './AuthProvider.jsx';
import CheckOut from './CheckOut.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import CheckOuts from './CheckOuts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-server-blush-seven.vercel.app/services/${params.id}`)
      },
      {
        path: "/checkouts",
        element: <PrivateRoute><CheckOuts /></PrivateRoute>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
