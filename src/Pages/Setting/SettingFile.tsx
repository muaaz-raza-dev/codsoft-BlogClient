import { Route,  Routes } from "react-router-dom"
import UserProfileFile from "./Profile/UserProfileFile"
import MainSettingFile from "./Main Setting/MainSettingFile"

const SettingFile = () => {
  return (
    <Routes>
      <Route path="/" element={<UserProfileFile/>}/>
      <Route path="/settings/*" element={<MainSettingFile/>}/>
    </Routes>
  )
}

export default SettingFile
