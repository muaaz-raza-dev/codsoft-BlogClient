import { Iblog } from '@/app/Types/Ilanding'

const MainBlog = ({data}:Iblog|any) => {
  
  return (
    <main className="flex flex-col w-full">
      <header className=" w-full flex items-center justify-center p-2 ">
            <img src={data?.banner||"/images/Records.png"} alt="Banner Image" />
      </header>
      <div className="text-xl">
<p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html:data.content}}>

</p>
      </div>
    </main>
  )
}

export default MainBlog
