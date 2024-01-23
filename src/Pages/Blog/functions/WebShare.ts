export let Webshare =async (title?:string,url?:string,text?:string)=>{
    if (navigator) {
        
        if (navigator.share) {
           await navigator.share(
                {
                title:title||"Reality of AI",
                url:url||"http://localhost:5173/blog",
                text:text||"Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is a field of study in computer science that develops and studies intelligent machines. Such machines may be called AIs"
            }
            ) 
        }
        else{
        await    navigator?.clipboard?.writeText(url||"http://localhost:5173/blog")       
        }
    }
}