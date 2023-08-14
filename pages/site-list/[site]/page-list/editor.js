// import {ContentProvider} from "../api/builder"
import ContentProvider from "../../../../builder"
import Layout from "../../../../layout/layout"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { LayoutContext } from "../../../../layout/context/layoutcontext"


//  export { getStaticProps } from "./api/server/index"
//  export { ContentProvider as default } from "./api/builder"

const Builder=()=>{
    const {onMenuToggle,layoutState,
    setLayoutState,auth,
    progress,
    setProgress
}=useContext(LayoutContext)
    const router=useRouter()
    

    // useEffect(()=>{
    //     const checkStatus=()=>{
    //         if(!auth){
    //            router.push("/auth/login")
    //         }
    //     }
    //     checkStatus()
    // },[])

    useEffect(()=>{
        setLayoutState({configSidebarVisible:false,
            menuHoverActive:false,
            overlayMenuActive:false,
            profileSidebarVisible:false,
            staticMenuDesktopInactive:true,
            staticMenuMobileActive:false})
    },[])
     
    // if(!auth){
    //     return <div className=" flex justify-center items-center w-full h-screen"><ProgressSpinner /></div>
    // }

    

    
    const data=[]
    return(
        <Layout>
        {ContentProvider(data)}
         </Layout>
    )
}
export default Builder

