import { Outlet } from "react-router"
import Footer from "../components/Home/Footer"
import Nav from "../components/Home/Nav"

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-396px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
