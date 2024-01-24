
import Axios from "../axios"

const FetchBlogs = async(count:number,interests:string[]) => {

let response = await Axios.post(`/posts`,{count,insterests:interests||[]})
return response

}

export const FetchStarter = async(count:number) => {
    // let data = useAppSelector(state=>state.landing)
    // let dispatch = useAppDispatch()
    // let {count} = data

let interests=null
    let response = await Axios.post(`/posts/starter`,{count,interests})
    return response.data
    // dispatch(insertion({count:count+1,Blogs:response.data?.payload?.Blogs,Topics:response.data?.payload?.Topics,Trendings:response.data?.payload?.Trendings}))
    }
export default FetchBlogs
