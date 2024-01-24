import  { LightLoader } from "@/Essentials/Loader";
import Login from "@/Queryfunctions/Auth/Login";
import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks";
import { AuthInsertion } from "@/app/Slices/AuthSlice";
import { Credits, CreditsInsertion } from "@/app/Slices/CredentialSlice";
import { insertion } from "@/app/Slices/LandingSlice";
import Cookies from "js-cookie";
import { ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


const LoginFile = () => {
  let dispatch = useAppDispatch();
  let dataAuth=useAppSelector(state=>state.auth)
  let navigate= useNavigate()
  let {mutate,isLoading}= useMutation({mutationKey:"Login",mutationFn:()=>Login(dataAuth.login),onSuccess:(data)=>{
 if (data.success===true) {
        toast.success("Logined to your account")
        Cookies.set("Records_session",data.token,{expires: new Date(Date.now() + 2.628e9)})
        dispatch(CreditsInsertion({isLogined:true,Info:{...Credits.Info,...data.payload}}))
        dispatch(insertion({tabs:data.interests}))
        console.log(data);
        
        navigate("/")
      }
      else{
        toast.error(data.msg)

      }
  }})
function inputHandler(purpose:string,e:ChangeEvent<HTMLInputElement>) {
        dispatch(AuthInsertion({purpose,[e.target.name]:e.target.value}))
  }

  return (
    <section className="min-h-[94vh] flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden to-[var(--primary)] from-[var(--secondary)] bg-gradient-to-t  bg-no-repeat bg-cover relative items-center shadow-lg">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-12 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-sm my-4">
            Unlock the power of words and let your thoughts take flight. Welcome
            to our blogging community, where every login is a step towards
            sharing your story with the world. Embrace the journey of
            self-expression and connect through the art of words on our platform
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 bg-[var(--bg)] text-black w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div className="absolute lg:hidden z-10 inset-0 bg-no-repeat bg-cover items-center">
          <div className="absolute opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 text-4xl hFont">Login to Blogger</h1>

          <form onSubmit={(e)=>{
            e.preventDefault()
          mutate()
          }} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
              value={dataAuth.login.username}
                type="text"
                name="username"
                onChange={(e) => inputHandler("login",e)}
                id="email"
                placeholder="username"
                className="block w-full p-4 text-lg rounded border-[var(--secondary)] border-2 focus:border-black "
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded border-[var(--secondary)] border-2 focus:border-black "
                onChange={(e) =>
                  inputHandler("login",e)
                }
                value={dataAuth.login.password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="text-right  hover:underline hover:text-gray-100"></div>
            <div className="px-4 pb-2 pt-4">
              <button className="uppercase block w-full p-4 text-lg rounded-full bg-[var(--primary)] hover:bg-[black] text-white transition-colors focus:outline-none">
            {
            isLoading?
            <LightLoader/>
            :    "Login"
            }
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LoginFile;
