export interface Itopic{
    _id:string,
    title:string
}

// interface IAuthor{
//     username:{type:String,required:true,unique:true},
//     avatar:{type:String,},
//     email:{type:String,required:true},
//     password:{type:String,required:true},
//     Name:{type:String,required:true},
//     bio:{type:"string"},
//     followers:{type:[ObjectId],Ref:"Member"},
//     following:{type:[ObjectId],Ref:"Member"},
//     Posts:{type:[ObjectId],Ref:"Posts"},
//     saved:{type:[ObjectId],Ref:"Posts"},
//     interests:{type:[String]},
//     registeredDate:{type:Date,default:Date.now} 
// }
interface IAuthor{
_id:string, 
avatar:string,
username:string
}
interface IComment{
    username:string,
    content:string,
    delivered:string,
    post:string,
}
export interface Iblog{
_id:string,
author:IAuthor,
title:string,
subTitle?:string,
banner:string,
publishDate:string,
content:string,
views:number,
timeToRead:string,
topic:{title:string,_id:string},
tags:string[],
likes:number,
Comments:IComment[],
}
export interface Ilanding{
  Blogs:Iblog[];
  Trendings:Iblog[];
  Topics: {_id:string,
  topic:{_id:string,title:string}
  result:number}[];
  count:number;
  tabs:Itopic[];
  selectedTabs:string;
  totalResults:number,
  ValidModal:boolean
}