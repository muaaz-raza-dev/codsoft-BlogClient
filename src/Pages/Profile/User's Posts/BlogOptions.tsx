import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Edit, Trash } from "lucide-react";
import { FC, ReactNode } from "react";
  

const BlogOptions:FC<{children:ReactNode}> = ({children}) => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="h-full overflow-hidden  focus-visible:ring-0 object-center md:py-1 max-md:py-3 focus-within:ring-0 outline-0 active:ring-0 ring-0">
 {children}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mx-2 z-[600]">
      <DropdownMenuItem className="cursor-pointer">
        <button  className="flex gap-x-2 items-center">
          <Trash/>
          Delete
        </button>
      </DropdownMenuItem>
     
    
      <DropdownMenuItem className="cursor-pointer">
        
        <div  className="flex gap-x-2 items-center" >
       
          <Edit/> Edit 
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default BlogOptions
