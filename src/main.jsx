import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Main from './layout/Main'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
	{
		path: "/",
		element: <Home></Home>
	},
	{
		path: "/menu",
		element: <Menu></Menu>
	},
	{
		path: "/howitworks",
		element: <HowItWorks></HowItWorks>
	},
	{
		path: "about",
		element: <About></About>
	},
	{
		path: "contact",
		element: <Contact></Contact>
	},
	{
		path: "*",
		element: <ErrorPage></ErrorPage>
	}
	
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<div className='mx-auto w-full max-w-6xl'>
      	<RouterProvider router={router} />
	</div>
  </React.StrictMode>,
)
