import {ContentProvider} from "./api/builder"


//  export { getStaticProps } from "./api/server/index"
//  export { ContentProvider as default } from "./api/builder"

const Builder=()=>{
    const data=[]
    return(
        ContentProvider(data)
    )
}
export default Builder

