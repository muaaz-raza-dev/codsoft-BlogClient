import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { WriteInsertion } from "@/app/Slices/WriteSlice"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {ChangeEvent, useEffect} from "react"
const ReadCountCaculator = (plainText:string)=>{
let wordsCount = plainText.split(" ").filter(elm=>elm!==" ").length
let avgReader =200 //238-38 wpm refrence:Google
let output = wordsCount / avgReader 
return output>1?`${Math.round(output)} mins read` : `
        ${Math.round(output*60) } seconds read`
}
const AdditionalInfoB = () => {

  let writeState= useAppSelector(state=>state.write)
  let dispatch=useAppDispatch()
useEffect(() => {
    let output=  ReadCountCaculator(writeState.plainText)
    dispatch(WriteInsertion({timeToRead:output}))
}, [writeState.plainText]);
let InputHandler = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
dispatch(WriteInsertion({[e.target.name]:e.target.value}))
}
  return (
    <div className="w-full">
      <Input placeholder="Title" name="title" className="   focus-visible:ring-0 border border-black my-2 text-md font-bold placeholder:font-bold " onChange={(e)=>InputHandler(e)} value={writeState.title}/>
      <Textarea placeholder="Sub-title or teaser " name="subtitile" className="   focus-visible:ring-0 border border-black my-2 text-sm" onChange={(e)=>InputHandler(e)} value={writeState.subtitile} />
      <div className="flex gap-x-2 w-full justify-between" >
      <div className="w-[80%]">
      <Input placeholder="Topic i.e Programming or Entertaiment" name="topic" className=" outline-none  focus-visible:ring-0 border border-black my-2 text-xs " onChange={(e)=>InputHandler(e)} value={writeState.topic}/>
    
      </div>
      <div className="text-center center float-end flex gap-x-2 bg-[var(--primary)] max-md:w-[25%] md:w-[15%] p-2 my-2 rounded text-white">
        {writeState.timeToRead}  </div>
        </div>
    </div>
  )
}

export default AdditionalInfoB
