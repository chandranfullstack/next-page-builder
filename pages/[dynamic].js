 import {ContentProvider,ContentProvider1} from "./api/builder"
 import {loadAllData,loadDynamicData} from "./api/server/index"



const Dynamic =({data1})=>{
    console.log(data1,"data dynamic js")
    return ContentProvider1({data1})
}
export default Dynamic

 export const getStaticPaths = async () => {
     return {
       paths: [
         {
           params: {
             dynamic: 'dynamic',
           },
         }, 
       ],
       fallback: "blocking", 
     }
   }


export const getStaticProps=async(context)=>{
    const {params}=context
    console.log(params,"params")
    const data =await loadAllData()
    const data1=await loadDynamicData(params)
    console.log(data1,"data1 from dynamci js getstatic props")
    if(data1===undefined){
    return {props:{data:[]}}
    }else{
    return {props:{data1}}
    }
}