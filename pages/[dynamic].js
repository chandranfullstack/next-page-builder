 import {ContentProvider,ContentProvider1} from "./api/builder"
 import {loadAllData,loadDynamicData,getPages} from "./api/server/index"



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
             dynamic: 'dynamic'
           },
         }, 
       ],
       fallback:false, 
     }
   }


export const getStaticProps=async(context)=>{
    const {params}=context
    console.log(params,"params")
    const data =await loadAllData()
    const data1=await loadDynamicData(params)
    console.log(data1,"data1 from dynamci js getstatic props")
    if(data1===undefined){
    return {props:{data:[]},revalidate:10}
    }else{
    return {props:{data1},revalidate:10}
    }
}