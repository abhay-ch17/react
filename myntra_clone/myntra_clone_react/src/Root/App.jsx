import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"
import FetchItem from "../Components/FetchItem"
import Welcome from '../Components/Welcome'
import { useSelector } from "react-redux"

function App(){
  const loaderStatement = useSelector(store=>store.loader);
  console.log(loaderStatement)
  return <>
    <FetchItem/>
    <Header/>
    {loaderStatement?<Welcome/>:<Outlet/>}
    <Footer/>
  </>
}

export default App