import { loadPageData } from "../api/server"
import {ContentProvider1,ContentProvider} from "../api/builder"

export default function Page({ data1}) {
    return ContentProvider1({data1})
}


export async function getServerSideProps(context){
       const {params,res}=context
       const data1=await loadPageData(params.dynamic,params.dynamic1)
       if (!data1) {
        res.statusCode = 404; // Set the status code to 404
        return {
          notFound: true, // Signal Next.js to render the 404 page
        };
      }
       return {
         props:{data1}
       }
}