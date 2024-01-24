import SaveFn from "@/Queryfunctions/Posts/Save"
import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { CreditsInsertion } from "@/app/Slices/CredentialSlice"
import CreditsValidator from "@/app/middlewares/functions/CreditsValidator"
import { Bookmark } from "lucide-react"
import { toast } from "react-hot-toast"
import { useMutation } from "react-query"

const SaveBtn = ({_id}:{_id:string}) => {
    let dispatch=useAppDispatch()
    let {Info} =useAppSelector(state=>state.credits)
    let credits =useAppSelector(state=>state.credits)
    const {mutate}=useMutation({mutationFn:()=>SaveFn(_id) ,mutationKey:[_id,"save"] , onSuccess(resp) {
      if (resp.type=="save") {
          toast.success(resp.msg)
        }
        dispatch(CreditsInsertion({saved:resp.payload}))
    },})
  
    
  return (

<Bookmark fill={Info.saved.length!==0? Info?.saved?.filter(elm=>elm?._id===_id).length!==0?"black":"transparent":"transparent"} className="text-black hover:text-[var(--primary)] p-0.5 cursor-pointer" onClick={()=>{CreditsValidator<typeof mutate,typeof dispatch>(credits,mutate,dispatch)}} />
      

  )
}

export default SaveBtn
