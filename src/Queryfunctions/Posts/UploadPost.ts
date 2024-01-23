import Cookies from "js-cookie";
import Axios from "../axios";
interface BlogPost{
    author:string,title:string,subTitle:string,banner:string,content:string,timeToRead:string,topic:string,tags?:string,anonymous:Boolean
}
const UploadFn = async({author,title,subTitle,banner,content,timeToRead,topic,tags,anonymous}:BlogPost) => {
        let response = await Axios.post(`/posts/upload`,{author,title,subTitle,banner,content,timeToRead,topic,tags,anonymous},{
            headers:{"auth-token":Cookies.get("Records_session")}
        });
        return response.data;
}

export default UploadFn
