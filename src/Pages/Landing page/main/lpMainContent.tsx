import  { SmallLoader } from "@/Essentials/Loader"
import FetchBlogs from "@/Queryfunctions/Hooks/useFetchBlogs"
import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { Iblog } from "@/app/Types/Ilanding"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {  Dot, Heart } from "lucide-react"
import { FC } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom"
import LikeBtn from "./LikeBtn"
import SaveBtn from "./SaveBtn"
interface IblogProp {
data:Iblog;
}
export const PostBox:FC<IblogProp> = ({data})=>{

  
  return(
    <>
    <section className="flex w-full py-2 px-4 justify-between flex-col  ">
<Link to={`/user/${data.author._id?data.author._id:""}`} className="flex items-center   gap-x-0.5">
  <Avatar className="p-2 z-20">
    <AvatarImage src={data?.author?.avatar||"/images/anonymous.png"} className="z-10  aspect-square rounded-full"/>
  </Avatar>
<Link preventScrollReset to={`/user/${data.author._id?data.author._id:""}`}>{data?.author?.username||"Anonymous"}</Link>
<Dot/>
<p>{new Date(data?.publishDate).toLocaleDateString()}</p>
</Link>

<main className="flex w-full ">
  <section  className="flex flex-col w-[75%] justify-between">
    <Link to={`/blog/${data?._id}`} className="cursor-default">
<h1  className="BFont text-2xl">{data?.title}</h1>
    <p className="text-[.9rem]">{data?.subTitle} </p>
    </Link>
<section className="flex gap-x-4 items-center justify-between w-full">
      <div className=" flex gap-x-2 items-center ">
<div className=" px-2 py-0.5 bg-gray-200 rounded-md text-sm">{data.topic?.title}</div>
  <p className="text-gray-800 text-sm">{data.timeToRead}</p>
  <p className="text-gray-800 text-sm flex items-center gap-x-2">{data.likes} <Heart size={16}/></p>
      </div>
<section className="flex gap-x-4">
<SaveBtn _id={data._id}/>
<LikeBtn _id={data._id}/>
</section>
</section>
</section>

  <div className="w-[20%] flex overflow-hidden justify-end aspect-square     p-2   ">
<img src={data?.banner||"/images/Records.png"} alt="" className="w-full object-contain " />
  </div>
</main>

    </section >
<Separator/>
</>
  )
}

export const LpMainContent = () => {
  let Data = useAppSelector(state=>state.landing)
  let Credits = useAppSelector(state=>state.credits)
  let dispatch =useAppDispatch()
  
  return (
    <div className="flex flex-col w-full gap-y-3  ">
      <InfiniteScroll 
      className="overflow-hidden overflow-x-hidden "
      dataLength={Data.Blogs.length}
      next={()=>{if (Data.Blogs.length!==0) {
        FetchBlogs<typeof dispatch >(Data,dispatch,Credits)}
      }
    }
      hasMore={Data.Blogs.length!==Data.totalResults}
      loader={ 
<SmallLoader/>

      }
      endMessage={<h1 className="text-md font-bold py-6 text-center">You all caught up!
      </h1>}
      >
{
  Data.Blogs.length!==0&&
  Data.Blogs.map((elm)=><PostBox data={elm} />)
}
  </InfiniteScroll>
</div>
  )
}