// import {ContentProvider} from "../api/builder"
import ContentProvider from "../../builder"
import Layout from "../../layout/layout"
import AppTopbar from "../../layout/AppTopbar"
import { LayoutContext } from "../../layout/context/layoutcontext"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { ProgressSpinner } from "primereact/progressspinner"


//  export { getStaticProps } from "./api/server/index"
//  export { ContentProvider as default } from "./api/builder"

const Builder=()=>{
    const {onMenuToggle,layoutState,setLayoutState,auth}=useContext(LayoutContext)
<<<<<<< HEAD
    const router=useRouter()
    

    useEffect(()=>{
        const checkStatus=()=>{
            if(!auth){
               router.push("/auth/login")
            }
        }
        checkStatus()
    },[])
=======
>>>>>>> beb75ae (changes from server)

    useEffect(()=>{
        setLayoutState({configSidebarVisible:false,
            menuHoverActive:false,
            overlayMenuActive:false,
            profileSidebarVisible:false,
            staticMenuDesktopInactive:true,
            staticMenuMobileActive:false})
<<<<<<< HEAD
    },[])
     
    if(!auth){
        return <div className=" flex justify-center items-center w-full h-screen"><ProgressSpinner /></div>
    }

    

    
=======
    })
    useEffect(()=>{
        const checkAuth=()=>
    })
>>>>>>> beb75ae (changes from server)
    const data=[]
    return(
        <Layout>
        {ContentProvider(data)}
         </Layout>
    )
}
export default Builder

