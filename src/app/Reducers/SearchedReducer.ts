import { PayloadAction } from "@reduxjs/toolkit/react";
import { Isearched, ItopicInfo } from "../Types/Isearched";
import { Iblog } from "../Types/Ilanding";
interface IwriteAction {
    Blogs?:Iblog[],
    count?:number,
    totalResults?:number,
    Topic?:ItopicInfo,
    TopicSearch?:boolean
}

const searchedInsertion = (state: Isearched, action: PayloadAction<IwriteAction>) => {
  let { payload } = action;
if (payload.Blogs)state.Blogs=payload.Blogs 
if (payload.count)state.count=payload.count 
if (payload.totalResults)state.totalResults=payload.totalResults 
if (payload.Topic)state.Topic=payload.Topic 
if (payload.TopicSearch)state.TopicSearch=payload.TopicSearch 
};

export default searchedInsertion;
