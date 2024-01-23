import { Iblog } from '@/app/Types/Ilanding'

const MainBlog = ({data}:Iblog|any) => {
  
  return (
    <main className="flex flex-col w-full">
      <header className=" w-full flex items-center justify-center p-2 ">
            <img src={data?.banner||"/images/Records.png"} alt="Banner Image" />
      </header>
      <div className="text-xl">
<p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html:data.content||`
Earlier this month, Spotify announced a massive reduction in its workforce to the tune of 17%. This is Spotify’s third round of layoffs this year alone.

While this shouldn’t come as a surprise given the recent number of layoffs in the tech sector, what is surprising is that this round of layoffs came after Spotify posted its first profitable quarter since 2021.

When business is booming, employers should be retaining workers, right?

Not necessarily.
<b>One look at a company’s business model will tell you everything you need to know about how viable employment is with that company. Unfortunately, most of the business models that have proliferated in tech aren’t conducive to stable, long-term employment.</b>

This essay is going to analyze statements made by Spotify’s CEO that justify the company’s posture on its workforce. It reveals how C Suite executives are thinking about the future of work and how this will likely shape other sectors of the economy in the years ahead.

Tech has long had more workers than it needs. This has created an illusory bubble around the employment opportunities it offers.
Over the summer, Business Insider reported that a number of recently laid-off Meta employees had actually been hired to do fake work. According to one ex-Meta employee:

“I am one of those employees that was kind of hired into a really strange position where they immediately put me into a group of individuals that was not working,” Levy said in a TikTok posted Saturday. “You had to fight to find work.”

In the video, which has garnered over 870,000 views, Levy said she felt Meta was hiring people so other companies couldn’t have them.
`}}>

</p>
      </div>
    </main>
  )
}

export default MainBlog
