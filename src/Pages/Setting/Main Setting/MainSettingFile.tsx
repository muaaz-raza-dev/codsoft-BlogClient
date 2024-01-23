import { Route, Routes } from "react-router-dom"
import EditProfile from "./Edit/EditProfile"
import SettingsSidebar from "./Sidebar/SettingsSidebar"

const MainSettingFile = () => {
  return (
    <div className="w-full flex gap-x-8 ">
      <SettingsSidebar/>
      <Routes>
<Route path="/" element={<EditProfile/>}/>
      </Routes>
    </div>
  )
}

export default MainSettingFile
