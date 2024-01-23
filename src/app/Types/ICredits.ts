import { Iblog, Itopic } from "./Ilanding";

interface IblogShort {
    title:string;
    banner:string;
    likes:number;
    views:number;
    subtitle:string;
    timeToRead:string;
    publishDate:string;
    topic:string;
}
interface IMemberShort {
    username:string;
    avatar:string;
}
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