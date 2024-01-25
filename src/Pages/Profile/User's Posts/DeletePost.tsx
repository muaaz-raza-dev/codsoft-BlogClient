import Loader from "@/Essentials/Loader"
import DeleteFn from "@/Queryfunctions/Posts/DeletePost"
import { useAppDispatch } from "@/app/ReduxHooks"
import { CreditsInsertion } from "@/app/Slices/CredentialSlice"
import {  Trash2 } from "lucide-react"
import { toast } from "react-hot-toast"
import { useMutation } from "react-query"

const DeletePost:React.FC<{id:string}> = ({id}) => {
    let dispatch=useAppDispatch()
    let {isLoading,mutate}=useMutation({mutationKey:"Delete",mutationFn:()=>DeleteFn(id) ,
    onSuccess(response){
        toast.success("Post deleted sucessfully!")
        dispatch(CreditsInsertion({Posts:response.payload}))
    }}, )

  return (
    <button  className="flex gap-x-2 items-center text-red-500 text-xs" onClick={()=>mutate()}>
    <Trash2 size={18}/>
    {
        isLoading?
        <Loader/>:
    "Delete"
    }
  </button>
  )
}

export default DeletePost
