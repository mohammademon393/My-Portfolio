import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import Demos from './Pages/Projects.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';
import Contact from './Components/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "/Service",
        Component: Service,
      },
      {
        path: "/contact",
        Component: Contact,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
