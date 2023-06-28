import {ContentProvider} from "../api/builder"
import { loadAllData} from "../api/server/index"
import axios from "axios"


const Solutions=({data})=>{
   return ContentProvider({data})
}
export default Solutions

export const getServerSideProps=async()=>{
   const data=await axios.get("https://builder-server.onrender.com/page")
   console.log(data,"data")
   return {props:{data}}
}



