
import { LpHeaderFile } from "./header/lpHeaderFile"
import { LpMainContent } from "./main/lpMainContent"
import LpSidebarFile    from "./sidebar/LpSidebarFile"

const LandingFile = () => {



return (
    <main className="w-full gap-y-4 flex max-md:flex-col-reverse justify-between">
        <section aria-label="Main part" className="md:w-[70%] max-md:w-full md:py-8 max-md:py-2  flex items-center flex-col">
            <div className="md:w-[90%] max-md:full  flex flex-col gap-y-8 ">
<LpHeaderFile/>
<LpMainContent/>
            </div>
        </section>
        <section aria-label="" className="flex md:py-8 max-md:pt-2 px-6 md:w-[35%] max-md:w-full   md:h-[90vh]  border-l">
<LpSidebarFile/>
        </section>
    </main>
  )
}

export default LandingFile