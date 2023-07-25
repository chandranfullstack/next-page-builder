import {ContentProvider,ContentProvider1} from "./api/builder"
import {loadAllData,loadDynamicData,getPages} from "./api/server/index"
import { getPageNames } from "../demo/service/fileNames"



const Dynamic =({data1})=>{
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
            dynamic: ['home']
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
   //const pageList=await getPageNames()
   //console.log(pageList,"pageList")
   const alldata=await loadDynamicData(params)
   const data1=alldata.find(i=>i.name==="\\"+params.dynamic[params.dynamic.length-1])
  console.log(params.dynamic.length)
   console.log("\\"+params.dynamic,"paramic dynamic")
   params.dynamic.map((l)=>console.log(l,"l"))
   //console.log(alldata,"alldata")
   if(data1===undefined){
   return {props:{data1:[]}}
   }else{
   return {props:{data1}}
   }
}



