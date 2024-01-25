import { Iblog } from "@/app/Types/Ilanding"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import BlogOptions from "./BlogOptions"
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'
export const BlogPost = ({data}:Iblog|any) => {
  TimeAgo.addDefaultLocale(en)

    
  const timeAgo = new TimeAgo('en-US')
  
  return (
    <main  className="flex flex-col gap-y-2 lg:w-[40%] border max-lg:w-[35%] max-md:w-[95%] md:min-h-[37vh] max-md:min-h-[30vh] border-b p-2 items-center px-5 ">

        <Link to={`/blog/${data._id}`} className="flex justify-center object-fill h-48 bg-gray-300 w-full  border-b  p-2">
<img src={data?.banner||"/images/Records.png"} alt="" className="h-full aspect-square"/>
        </Link>

     
        <h1 className="font-bold text-xl ">{data?.title}</h1>
        <p className=" ">{data?.subTitle.split(" ").slice(0,20).join(" ")|| ""}... </p>
        <section className="flex w-full gap-x-2 py-2">
        <p className="text-gray-800 text-sm tracking-tighter">{data?.timeToRead}</p>
<p className="text-gray-800 text-sm tracking-tighter">{timeAgo.format(new Date(data?.publishDate))}</p>

        </section>
    <div className="flex gap-x-2  items-center w-full justify-between">
<div className=" px-2 py-0.5 bg-gray-200 rounded-md text-sm">{data?.topic?.title}</div>
<div className="flex  gap-x-4 w-full justify-between">
  
  <div className="text-gray-800 text-sm flex items-center justify-center gap-x-0.5">
     {data?.likes} 
  

<div className="cursor-not-allowed ">
  <Heart size={15}/>
</div>
  </div>
  
  <BlogOptions>
     <div className=" rotate-90 text-xl">...</div>
  </BlogOptions>
</div>
      </div>
    </main>
  )
}


