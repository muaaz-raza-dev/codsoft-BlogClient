import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { LucideShare, MessageCircle } from "lucide-react";
import { Webshare } from "./functions/WebShare";
import { Iblog } from "@/app/Types/Ilanding";
import { useAppDispatch } from "@/app/ReduxHooks";
import LikeMechanism from "./LikeMechanism";
import { Link } from "react-router-dom";
import CommentsFile from "./Comments/CommentsFile";
import { CommentInsertion } from "@/app/Slices/CommentSlice";
import SaveBtn from "../Landing page/main/SaveBtn";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

const BlogHeader = ({data}:(Iblog|any)) => {
  let dispatch =useAppDispatch()
  TimeAgo.addDefaultLocale(en)

    
  const timeAgo = new TimeAgo('en-US')
  return (
    <header className="flex flex-col gap-y-8">
      <div className="">
      <h1 className="text-5xl BFont">{data?.title}</h1>
      <p className="text-gray-700 font-roboto ">{data?.subTitle}</p>
      </div>
      <Link to={data.author?`/user/${data.author?._id }`:`/blog/${data._id}`} className={`flex gap-x-2 items-center ${!data.author&&"cursor-not-allowed"}`} >
        <Avatar>
          <AvatarImage src={data?.author?.avatar || "/images/anonymous.png"} />
        </Avatar>
        <div className="">
          <h1 className="flex gap-x-4 text-lg ">
            {data?.author?.username ||"Anonymous"}
            {/* {
              data.author &&
            <b className="cursor-pointer opacity-70 hover:opacity-100 text-[var(--secondary)]">
              Follow
            </b>
            } */}
          </h1>
          <span className="flex gap-x-2 text-sm text-gray-500">
            {data?.timeToRead}
            <p>|| {timeAgo.format(new Date(data?.publishDate))}</p>
          </span>
        </div>
      </Link>
      <div className="flex flex-col gap-y-6 px-2">
        <Separator />
        <section className="flex justify-between">
          <div className="flex gap-x-6">
           <LikeMechanism data={data}/>
           <CommentsFile >
            <div onClick={()=>dispatch(CommentInsertion({count:0}))} className="flex gap-x-1 cursor-pointer text-[#6B6B6B] hover:text-black transition text-sm items-center">
              <MessageCircle
                size={20}
                className="text-[#6B6B6B] hover:text-black transition"
              />
              {data?.comments?.length}
            </div>
            </CommentsFile>
          </div>
          <div className="flex gap-x-6">
            <SaveBtn _id={data._id}/>
            {/* <Bookmark
              size={20}
              className="text-[#6B6B6B] hover:text-black transition cursor-pointer"
            /> */}
            <div className="" onClick={() => Webshare(data?.title,location.href,data?.subTitle)}>
              <LucideShare
                size={20}
                className="text-[#6B6B6B] hover:text-black transition cursor-pointer"
              />
            </div>
          </div>
        </section>
        <Separator />
      </div>
    </header>
  );
};

export default BlogHeader;
