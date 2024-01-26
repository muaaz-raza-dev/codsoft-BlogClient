import { SmallLoader } from "@/Essentials/Loader";
import FetchBlogs from "@/Queryfunctions/Hooks/useFetchBlogs";
import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks";
import { Iblog } from "@/app/Types/Ilanding";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Dot, Heart,} from "lucide-react";
import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import SaveBtn from "./SaveBtn";
import RestrictionIcon from "./RestrictionIcon";
import PostBlockRenderer from "./FollowerRestrictionValidator";
interface IblogProp {
  data: Iblog;
  Follower:boolean
}
export const PostBox: FC<IblogProp> = ({ data ,Follower}) => {

  
  return (
    <>
      <section className="flex  w-full py-2 md:px-4 max-md:px-2 justify-between flex-col  ">
        <Link
          to={`/user/${data?.author?._id ? data?.author?._id : ""}`}
          className="flex items-center   gap-x-0.5"
        >
          <Avatar className="p-2 z-20 h-full">
            <AvatarImage
              src={data?.author?.avatar || "/images/anonymous.png"}
              className="z-10  aspect-square rounded-full"
            />
          </Avatar>
          <Link
            preventScrollReset
            to={
              Follower?
              data?.author?._id?
                 `/user/${data?.author._id}`
                : `/blog/${data?._id}`:
                data?.author?._id?
                 `/user/${data?.author._id}`
                : `/blog/${data?._id}`
            }
          >
            {data?.author?.username || "Anonymous"}
          </Link>
          <Dot />
          <p>{new Date(data?.publishDate).toLocaleDateString()}</p>
        </Link>

        <main className="flex w-full h-full max-md:items-center max-md:flex-col-reverse ">
          <section className="flex flex-col px-2 md:w-[75%] max-md:w-full justify-between">
            <Link to={!data.FollowerOnly?`/blog/${data?._id}`:Follower?`/blog/${data?._id}`:`/user/${data?.author._id}`} className="cursor-default">
              <h1 className="BFont md:text-2xl max-md:text-xl">
                {data?.title}
              </h1>
              <p className="md:text-[.9rem] max-md:text-[.7rem] text-gray-700">
                {data?.subTitle?.split(" ").slice(1, 40).join(" ")}...{" "}
              </p>
              {!data.subTitle && (
                <p
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: data.content.slice(1, 20),
                  }}
                ></p>
              )}
            </Link>
            <section className="flex gap-x-4 items-center justify-between w-full">
              <div className=" flex gap-x-2 items-center ">
                <div className=" px-2 py-0.5 bg-gray-200 rounded-md text-sm">
                  {data.topic?.title}
                </div>
                <p className="text-gray-800 text-sm">{data.timeToRead}</p>
                <p className="text-gray-800 text-sm flex items-center gap-x-1">
                  {data.likes} <Heart className="max-md:w-6" size={12} />
                </p>
              </div>
              <section className="flex gap-x-4 items-center">
                {data.FollowerOnly&&
<RestrictionIcon Info={data.FollowerOnly}/>
                }
                <SaveBtn _id={data._id} />
                <LikeBtn _id={data._id} />
              </section>
            </section>
          </section>

          <div className="md:w-[18%] max-md:w-[55%] center rounded flex overflow-hidden  justify-end aspect-square  h-full mx-2">
            {["mp3", "mp4"].includes(data?.banner.split(".")[3]) ? (
              <video src={data.banner} loop autoPlay muted ></video>
            ) : (
              <img
                src={data?.banner || "/images/Records.png"}
                alt=""
                className="w-full object-contain rounded "
              />
            )}
          </div>
        </main>
      </section>
      <Separator />
    </>
  );
};

export const LpMainContent = () => {
  let Data = useAppSelector((state) => state.landing);
  let Credits = useAppSelector((state) => state.credits);
  let dispatch = useAppDispatch();

  return (
    <div className="flex flex-col w-full gap-y-3  ">
      <InfiniteScroll
        className="overflow-hidden overflow-x-hidden ZeroScroll "
        dataLength={Data.Blogs.length}
        next={() => {
          if (Data.Blogs.length !== 0) {
            FetchBlogs<typeof dispatch>(Data, dispatch, Credits);
          }
        }}
        hasMore={Data.Blogs.length !== Data.totalResults}
        loader={<SmallLoader />}
        endMessage={
          <h1 className="text-md font-bold py-6 text-center">
            You all caught up!
          </h1>
        }
      >
        {Data.Blogs.length !== 0 &&
          Data.Blogs.map((elm) => <PostBlockRenderer key={elm._id} data={elm}/>)}
      </InfiniteScroll>
    </div>
  );
};
