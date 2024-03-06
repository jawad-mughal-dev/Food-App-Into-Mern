import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Screens/ErrorPage.jsx';
import About from './Screens/About.jsx';
import Blog from './Screens/Blog.jsx';
import Shop from './Screens/Shop.jsx';
import Home from './Screens/Home.jsx';
import Login from './Screens/Login.jsx';
import SignUp from './Screens/SignUp.jsx';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='shop' element={<Shop />} />
      <Route path='blog' element={<Blog />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )


);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "blog",
//         element: <Blog />
//       },
//       {
//         path: "shop",
//         element: <Shop />
//       },
//     ]
//   },

// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
