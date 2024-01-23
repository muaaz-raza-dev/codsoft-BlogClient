import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { FileUploader } from "react-drag-drop-files"
import {useState,useRef} from "react"
import { Upload } from "lucide-react";
import UploadImage from "@/app/middlewares/functions/ImageUploader";
import { WriteInsertion } from "@/app/Slices/WriteSlice";
import { toast } from "react-hot-toast";

const BannerUploadB = () => {
  const writeState =useAppSelector(state=>state.write)
const [ImageURI, setImageURI] = useState<{sample:string,blob?:Blob}>({sample:writeState.Banner});
let fileRef =useRef()
  let dispatch = useAppDispatch()
  return (
    <section className="w-full flex flex-col items-center gap-y-4">
        <div className="w-[70%]  ">
<div className={`${!ImageURI.sample&&"bg-gray-500"} border-2 p-2 object-contain w-full flex items-center justify-center text-white  `}>
            {
              !ImageURI.sample?
              " Your Image will be showing here."
              :
              <img src={ImageURI.sample} alt="" className="w-full"  />
            }
        </div>
        </div>

        {
          !writeState.Banner&&
          <>
<FileUploader  multiple={false} ref={fileRef} label="Upload your banner" file={true} handleChange={(file:Blob)=>{
  setImageURI({sample:URL.createObjectURL(file),blob:file})
}} types={["PNG","JPG","JPEG"]} />
<div className="flex gap-x-4">

{
  ImageURI&&
<button onClick={()=>{ImageURI.blob&&UploadImage(ImageURI?.blob).then(data=>{
  dispatch(WriteInsertion({Banner:data.url}))
  localStorage.setItem("Banner_Post",data.url) // For draft puropose
toast.success("Banner uploaded")
}
)
}} className="p-2 w-fit rounded text-md text-white bg-[var(--primary)] flex gap-x-2">
  Upload
  <Upload size={20}/>
</button>
}
</div>
  </>
}
    </section>
  )
}

export default BannerUploadB
