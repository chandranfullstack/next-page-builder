import {ContentProvider} from "../api/builder"
import Layout from "../../layout/layout"
import AppTopbar from "../../layout/AppTopbar"
import { LayoutContext } from "../../layout/context/layoutcontext"
import { useContext, useEffect } from "react"


//  export { getStaticProps } from "./api/server/index"
//  export { ContentProvider as default } from "./api/builder"

const Builder=()=>{
    const {onMenuToggle,layoutState,setLayoutState}=useContext(LayoutContext)

    useEffect(()=>{
        setLayoutState({configSidebarVisible:false,
            menuHoverActive:false,
            overlayMenuActive:false,
            profileSidebarVisible:false,
            staticMenuDesktopInactive:true,
            staticMenuMobileActive:false})
    })
    const data=[]
    return(
        <Layout>
        {ContentProvider(data)}
         </Layout>
    )
}
export default Builder

