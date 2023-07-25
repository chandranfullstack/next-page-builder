// import {ContentProvider} from "./api/builder"
import ContentProvider from "../builder/index"

//  export { getStaticProps } from "./api/server/index"
//  export { ContentProvider as default } from "./api/builder"

const Builder=()=>{
    const data=[]
    return(
        ContentProvider(data)
    )
}
export default Builder

