import {ContentProvider} from "./api/builder"
import { loadAllData} from "./api/server/index"

const Home=({data})=>{
   return ContentProvider({data})
}
export default Home

export const getStaticProps=async()=>{
   const data=await loadAllData()
   return {props:{data}}
}