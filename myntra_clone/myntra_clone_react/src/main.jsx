import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Root/App.jsx'
import Home from './Root/Home.jsx'
import Bag from './Root/Bag.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/index.js'

const router = createBrowserRouter([
  {path:'/', element:<App/>, children:[
    {path:'', element:<Home/>},
    {path:'bag', element:<Bag/>}
  ]}
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </StrictMode>,
)
