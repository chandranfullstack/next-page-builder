 import {ContentProvider,ContentProvider1} from "./api/builder"
 import {loadAllData,loadDynamicData,getPages} from "./api/server/index"



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
             dynamic: 'home'
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
    console.log(alldata,"all data")
    const data1=alldata.find(i=>i.name==="\\"+params.dynamic)
    console.log(data1,"data 1")
    if(data1===undefined){
    return {props:{data1:[]}}
    }else{
    return {props:{data1}}
    }
}

