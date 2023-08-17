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
        const AuthCheck=async()=>{
            const data={action:"auth"}
            const response=await fetch("/api/auth/middleware",
            {method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({data})})
            .then((res)=>(res.json()))
            console.log(response,response.auth)
            if(response.auth){
               setAuth(response.auth)
            }
            console.log(auth)
            //setProgress(false)
            if(auth===false){
                setProgress(false); // Set progress to false before redirecting
                router.push("/auth/login");
            }else if(response.auth===false){
                setAuth(false)
                router.push("/auth/login")
            }else if(response.auth===true){
                setProgress(false)
            }
        }
        AuthCheck()
       // if (auth === false) {
       //     setProgress(false); // Set progress to false before redirecting
       //     router.push("/auth/login");
       // }else if(auth===true){
       //     setProgress(false)
       // }
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



