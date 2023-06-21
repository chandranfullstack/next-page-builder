import { ContentProvider } from "./api/example";
import { loadAllData } from "./api/server";


const DynamicPage=({data,page})=>{
    return ContentProvider({data})
}
export default DynamicPage

export const getStaticPaths=async()=>{
    const paths={path:"/solutions"}
    return{paths,fallback:false}
}


export const getStaticProps=async(context)=>{
    const {params}=context
    console.log(params,"params",params.dynamic)
    const data =await loadAllData()
    if(!data){
        return {fallback:false}
    }
    const page=params.dynamic
    return {props:{data,page}}
}