import {ContentProvider} from "../api/builder"
import { loadAllData} from "../api/server/index"

const Solutions=({data})=>{
   return ContentProvider({data})
}
export default Solutions

export const getStaticProps=async()=>{
   const data=await loadAllData()
   return {props:{data}}
}



