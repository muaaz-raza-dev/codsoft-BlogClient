import { Iblog } from "./Ilanding";

export interface Iuser{
    username:string; avatar:string; bio?:string;
    _id:string

}
export interface IuserDetails{
Info:Iuser
Follower:string[]
Following:string[]
Posts:Iblog[],
isAdmin:boolean,
tabs:string[],
selectedTab:string
}