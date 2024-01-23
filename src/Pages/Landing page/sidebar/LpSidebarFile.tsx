import { RecommendedTopics } from "./RecommendedTopics"
import { TrendingSection } from "./TrendingSection"



const LpSidebarFile = () => {
  return (
    <aside className=" flex flex-col gap-y-7 w-full flex-wrap  md:fixed   ">
      <TrendingSection/>
      <RecommendedTopics/>
    <footer className="border-t flex gap-x-3 max-md:hidden">
<p className="py-2">@2024 <b>Records</b> , Inc. all rights reserved  <a href="https://www.linkedin.com/in/muaaz-raza" className=" font-bold no-underline hFont" target="_blank" rel="noopener noreferrer">
.
</a>
</p>
    </footer>
    </aside>
  )
}

export default LpSidebarFile
