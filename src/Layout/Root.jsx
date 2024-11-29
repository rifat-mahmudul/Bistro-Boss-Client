import { Outlet, useLocation } from "react-router"
import Footer from "../components/Home/Footer"
import Nav from "../components/Home/Nav"

const Root = () => {

    const location = useLocation();

    const loginPathName = location.pathname.includes('/login');
    const registerPathName = location.pathname.includes('/register');

  return (
    <div>
      {
        loginPathName || registerPathName || <Nav></Nav>
      }
      <div className="min-h-[calc(100vh-396px)]">
        <Outlet></Outlet>
      </div>
      {
        loginPathName || registerPathName || <Footer></Footer>
      }
    </div>
  )
}

export default Root
