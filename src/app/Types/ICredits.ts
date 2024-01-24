import { Iblog, Itopic } from "./Ilanding";


export interface Iinfo{
    _id:string;
    username:string
    avatar:string,
    email:string,
    Name:string,
    bio:string,
    followers:string[],
    following:string[],
    Posts:Iblog[],
    saved:Iblog[],
    interests:Itopic[],
    liked:string[],
    registeredDate:string;
}
export interface Icredits {
    Info:Iinfo
    isLogined:boolean;
}