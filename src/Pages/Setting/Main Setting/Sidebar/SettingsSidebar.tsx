import { useAppDispatch } from "@/app/ReduxHooks"
import { CreditsInsertion } from "@/app/Slices/CredentialSlice"
import Cookies from "js-cookie"
import {LogOut, UserCircle2Icon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const SettingsSidebar = () => {
        let dispatch =useAppDispatch()
        let navigate =useNavigate()
  return (
    <div className="h-[95vh] sticky top-0  lg:w-[35vw] max-lg:w-[25vw] max-md:w-[15vw] px-4 md:py-12 max-md:py-4  gap-y-4 border-r flex flex-col">
        <h1 className="text-3xl hFont max-md:hidden">Settings</h1>
        <Link to="/profile/settings" className="w-full flex gap-x-2 bg-gray-200 transition md:p-2 max-md:p-0.5 rounded  shadow-sm max-md:rounded-full "><UserCircle2Icon /> 
        <p className="max-md:hidden">
Edit Profile
        </p>
         </Link>
       
        <button onClick={()=>{
              Cookies.remove("Records_session")
              dispatch(CreditsInsertion({isLogined:false,Info: {
                _id:"",
              username:"",
              avatar:"",
              email:"",
              Name:"",
              bio:"",
              followers:[],
              following:[],
              Posts:[],
              saved:[],
              liked:[],
              anonymous:[],
              interests:[],
              registeredDate:"",
              }  }))
              navigate("/")
        }
        } className="w-full flex gap-x-2 hover:bg-gray-200 transition md:p-2 max-md:p-0.5 rounded    text-red-500 "><LogOut/> 
        <p className="max-md:hidden">
Log out
        </p>
        </button>
    </div>
  )
}

export default SettingsSidebar
