import { Outlet } from "react-router"

const Root = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mt-5">This is Root Components</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
