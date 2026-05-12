import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "./Header"

function AppLayOut() {
  return (
    <div>
      <SideBar/>
      <Header/>
        <main>

      <Outlet/>
        </main>
    </div>
  )
}

export default AppLayOut
