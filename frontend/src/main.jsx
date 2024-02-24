import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './pages/SignUp.jsx';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import MaxWidthWrapper from './components/MaxWidthWrapper.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>,
  },
  {
    path: "/dashbord",
    element: <App/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MaxWidthWrapper>

     <RouterProvider router={router} />
  </MaxWidthWrapper>
  </React.StrictMode>,
)
