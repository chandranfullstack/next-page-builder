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
    const {auth,setAuth}=useContext(LayoutContext)
    const router=useRouter()
    
    useEffect(()=>{
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
        if(auth===false){
            router.push("/auth/login")
        }
    }
    AuthCheck()
    },[auth])
   
    return(
        <>
        {
        auth?
        <Layout>   
            <div className=" flex flex-row justify-center pt-[100px]">
                <h1 className=" font-bold text-black">Welcome to Dashboard</h1>
            </div>
        </Layout>
        :
        <div className="w-full flex justify-center items-center h-screen">
            <ProgressSpinner />
        </div>
        }
        </>
    )
}
export default HomePage



