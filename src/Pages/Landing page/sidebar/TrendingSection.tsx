import { useAppSelector } from "@/app/ReduxHooks"
import { Iblog } from "@/app/Types/Ilanding";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Dot, TrendingUp } from "lucide-react"
import { FC } from "react";
import { Link } from "react-router-dom";
interface ITrendingProp {
  data:Iblog;
  }
export const ShortCard:FC<ITrendingProp> = ({data})=>{
  return(<div className="md:w-[33%] max-md:w-full flex flex-col border-b md:border-r py-2">
    <Link to={`/user/${data.author._id}`} className="flex items-center  gap-x-0.5">
  <Avatar className="p-2">
    <AvatarImage src={data?.author?.avatar||"/images/muaaz.png"} className="-z-10 w-full aspect-square rounded-full"/>
  </Avatar>
<h1>{data?.author?.username||"Anonymous"}</h1>
<Dot/>
<p>{data?.likes} likes</p>
</Link>
<Link to={`/blog/${data._id}`} className="">
<h1  className="text-[1.1rem] whitespace-normal h-max w-full   BFont pr-4 cursor-pointer " >{data?.title}</h1>
</Link>
</div>)
}

export const TrendingSection = () => {
  let data = useAppSelector(state=>state.landing)
  return (
    <div className="w-full">
        <h1 className="text-xl BFont flex gap-x-2 py-2 "> Trending <TrendingUp /> </h1>
        {
          data.Trendings.length!==0&&
            data.Trendings.map((elm)=><ShortCard data={elm}/>)
        }
    </div>
  )
}