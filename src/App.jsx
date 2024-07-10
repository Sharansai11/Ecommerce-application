import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import ErrorPage from './ErrorPage';

const Home = lazy(() => import('./components/home/Home'));
const Signin = lazy(() => import('./components/login/Login'));
const Signup = lazy(() => import('./components/signup/Signup'));
const About = lazy(() => import('./components/catalogue/About'));
const Contact = lazy(() => import('./components/Contact'));
const Cart = lazy(() => import('./components/Cart'));

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },
        { path: 'home', element: <Home /> },
        { path: 'cart', element: <Cart /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={browserRouter} />
      </Suspense>
    </div>
  );
}

export default App;
