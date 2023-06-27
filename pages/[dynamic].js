 import {ContentProvider,ContentProvider1} from "./api/builder"
 import {loadAllData,loadDynamicData,getPages} from "./api/server/index"
import fs from "fs"
import path from "path"


const Dynamic =({data1})=>{
    console.log(data1,"data dynamic js")
    return ContentProvider1({data1})
}
export default Dynamic

 export const getStaticPaths = async () => {
  const page=getPages()
  console.log(page,"page from getStatic paths")
     return {
       paths: [
         {
           params: {
             dynamic: 'solutions'
           },
         }, 
      ],
       fallback:true, 
     }
   }


export const getStaticProps=async(context)=>{
    const {params}=context
    console.log(params,"params")
    const data =await loadAllData()
    const alldata=await loadDynamicData(params)
    const data1=alldata.find(i=>i.name==="\\"+params.dynamic)
    alldata.find(i=>console.log(i.name,"i name","\\"+params.dynamic))
    console.log("data1 from dynamci js getstatic props","\\"+params.dynamic+".json",data1)
    if(data1===undefined){
    return {props:{data1:[]}}
    }else{
    return {props:{data1}}
    }
}

export const getServerSidePros=()=>{
  const dataFolder = "/public/data";
  const uploadFolder = "uploaded";
}