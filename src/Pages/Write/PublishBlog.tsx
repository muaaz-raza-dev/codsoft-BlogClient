import UploadFn from "@/Queryfunctions/Posts/UploadPost";
import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import {useState} from "react"
import { CreditsInsertion } from "@/app/Slices/CredentialSlice";
import { insertion } from "@/app/Slices/LandingSlice";
import { LightLoader } from "@/Essentials/Loader";
import { useNavigate } from "react-router-dom";
const PublishBlog = () => {
  let writeState = useAppSelector((state) => state.write);
  let dispatch=useAppDispatch()
  let credits = useAppSelector((state) => state.credits);
  let {Blogs} = useAppSelector((state) => state.landing);
  const [Anonymous, setAnonymous] = useState<Boolean>(false);
  let { mainContent, title, subtitile, Banner, topic ,timeToRead } = writeState;
  let navigate=useNavigate()
  let {mutate ,isLoading } = useMutation({mutationKey:["upload",credits.Info._id] , mutationFn:()=>{
      return UploadFn({author:credits.Info._id,anonymous:Anonymous,content:mainContent, title,subTitle: subtitile,banner: Banner,timeToRead, topic}) 
  } ,onSuccess(data) {
   let{payload}=data
   dispatch(insertion({Blogs:[payload,...Blogs]}))
   dispatch(CreditsInsertion({Posts:[payload,...credits.Info.Posts]}))
   toast.success("Blog posted successfully")
   localStorage.removeItem("Blog_Content")
   localStorage.removeItem("Banner_Post")
   navigate("/")
  },
onError(error){
  toast.error("Failed to upload , try again later")
}
});
  let DialogRef = useRef<any>(null);
  let validateInputs = () => {
    if (mainContent.length == 0 || title.length == 0 || topic.length == 0) {
      toast.error("Main Content, Title and Topic can't be empty ");
      DialogRef?.current?.click();
    } else {
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full" ref={DialogRef}>
          <Button
            onClick={validateInputs}
            className="bg-[var(--primary)] hover:bg-[var(--primary)] active:scale-95 transition-colors"
          >
            Publish
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>sumbit your content </DialogTitle>
            <DialogDescription>
              <div className="flex flex-wrap w-full my-4 items-center gap-3">
                <button
                  onClick={() =>{ setAnonymous(true) 
                  mutate()
                  }}
                  className="uppercase block w-full p-1 text-lg rounded-full bg-[var(--primary)] hover:bg-[black] text-white transition-colors focus:outline-none"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{!isLoading?"👽 Post Anonymously":<LightLoader/>} </TooltipTrigger>
                      <TooltipContent className=" ">
                        <p>
                          It will hide all of your user information, not reaveal
                          the yours ID
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </button>
              </div>
              <button
                onClick={() =>{ setAnonymous(false )  
                mutate()
                }}
                className=" block w-full p-1 text-lg rounded-full bg-[var(--primary)] hover:bg-[black] text-white transition-colors focus:outline-none"
              >
                {isLoading?<LightLoader/>:"Post normally"}
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default PublishBlog;
