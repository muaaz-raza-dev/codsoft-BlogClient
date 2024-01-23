import { useAppSelector } from "@/app/ReduxHooks"
import { BlogPost } from "./BlogPost"

const PUserPost = () => {
  let data=useAppSelector(state=>state.userDetails)
  let credits=useAppSelector(state=>state.credits)
  return (
    <section className="flex justify-center items-center gap-3  my-3 flex-wrap w-[95%]">
     {
      data.isAdmin==true?

      data.selectedTab=="Posts"?
      data.Posts.length!==0?
     
        data.Posts.map((elm)=><BlogPost data={elm}/>)
        :<h1> No post yet</h1> :
        credits.Info.saved.length!==0?
     
        credits.Info.saved.map((elm)=><BlogPost data={elm}/>) :
        <h1> No post yet</h1>:
        data.Posts.length!==0?
     
        data.Posts.map((elm)=><BlogPost data={elm}/>):
        <h1> No post yet</h1>

     } 
    </section>
  )
}

export default PUserPost
