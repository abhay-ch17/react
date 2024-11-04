import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import { Outlet } from "react-router-dom"

function App(){
  return <>

  <Header></Header>
    <Outlet></Outlet>
  <Footer></Footer>

  </>
}

export default App