import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen font-satoshi">
      <Outlet />
    </div>
  )
}

export default Layout;