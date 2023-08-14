"use client"
import Layout from "../layout/layout"
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.css"
import { LayoutContext } from "../layout/context/layoutcontext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProgressSpinner } from "primereact/progressspinner";

const HomePage=()=>{
    const {auth,setAuth,UserDetails,setUserDetails,progress,setProgress}=useContext(LayoutContext)
    const router=useRouter()
    

    useEffect(() => {
        if (auth === false) {
            setProgress(false); // Set progress to false before redirecting
            router.push("/auth/login");
        }
    });

    if (auth === false) {
        return null; // Early return to prevent rendering further content
    }
    console.log(auth,progress)
    if(progress){
        return  <Layout> <div className=" flex justify-center items-center w-full h-screen"  ><ProgressSpinner /></div>  </Layout>
    }


    return(
         <Layout >
            <div className=" flex flex-row justify-center pt-[100px]" >
            <h1 className=" font-bold text-black">Welcome to Dashboard</h1>
            {/* {UserDetails.length===0&&checkSession()} */}
        </div>
         </Layout>
    )
}
export default HomePage



