import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Params from './Components/Params.jsx'
import Github, { gitDataLoader } from './Components/Github.jsx'

// const router = createBrowserRouter([
//   {path:'/', element:<App/>, children:[
//     {path:'/', element:<Home/>},
//     {path:'/about', element:<About/>},
//     {path:'/contact', element:<Contact/>},
//   ]},
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
     <Route path="contact" element={<Contact/>}/>
      <Route path="Params/:userId" element={<Params/>}/>
      <Route path="Github" element={<Github/>} loader={gitDataLoader}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
