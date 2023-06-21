// import {loadAllData} from "./api/server/index"
// import { ContentProvider } from "./api/example"


// const Home=({data})=>{
//   console.log(data,"props")
//     return(
//         <div>
//           {data}
//         </div>
//     )
// }
// export default Home


// export async function getStaticProps(){
//     const content =await loadAllData()
//     console.log(content,"content form load all data")
//     const contentProvide =await ContentProvider({content})
//     console.log(contentProvide,"contentprovide")
//     const data =await JSON.parse(content[0].content)
//     console.log(data,"data")
//    console.log(data,"file read data")
//    if(!data){
//    return{ redirect:{
//       destination:"/"
//     }}
//    }
//    if(data.length===0){
//     return{
//       notFound:true
//     }
//    }
//    return { props: { data } };
//   }

import {ContentProvider} from "./api/example"
import { loadAllData} from "./api/server/index"

const Home=({data})=>{
   return ContentProvider({data})
}
export default Home

export const getStaticProps=async()=>{
   const data=await loadAllData()
   return {props:{data}}
}