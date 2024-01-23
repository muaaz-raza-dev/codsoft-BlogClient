import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { userDetailsInsertion } from "@/app/Slices/UserDetailsSilce"
import { Bookmark, Grid2X2 } from "lucide-react"

const UPostHeader = () => {
    let data=useAppSelector(state=>state.userDetails)
    let dispatch=useAppDispatch()
  return (
    <div className="md:w-[85%] max-md:w-[92%] mb-5 gap-x-8 center w-full  ">
        {data.tabs.map(elm=>{
             
            return(
        <button onClick={()=>{
            dispatch(userDetailsInsertion({selectedTab:elm}))
        }} className={`${elm==data.selectedTab && "border-black border-t-2 text-[var(--primary)]" } text-lg hFont flex gap-x-2 p-2`} >
            {elm=="Posts"?<Grid2X2 size={20}  /> : <Bookmark  size={20}/>}
            {elm}</button> 
        )    
    })
    }
    </div>
  )
}

export default UPostHeader
