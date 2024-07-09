

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css';

import { lazy, Suspense } from 'react'
import Home from './components/home/Home';
import Signin from './components/login/Login';
import Signup from './components/signup/Signup';
import RootLayout from './RootLayout';
import ErrorPage from './ErrorPage';
import About from './components/catalogue/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {

  const browserRouter = createBrowserRouter([{
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/home",
        element: <Home/>,
       
          
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }])

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
