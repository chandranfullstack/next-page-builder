// import {ContentProvider} from "./api/builder"
// import {loadAllData} from "./api/server/index"



const Dynamic =()=>{
    return <h1>Dynamic</h1>
}
export default Dynamic

// export const getStaticPaths = async () => {
//     return {
//       paths: [
//         {
//           params: {
//             name: 'dynamic',
//           },
//         }, 
//       ],
//       fallback: true, // false or "blocking"
//     }
//   }


// export const getStaticProps=async(context)=>{
//     const {params}=context
//     console.log(params)
//     const data =await loadAllData()
//     return {props:{data}}
// }