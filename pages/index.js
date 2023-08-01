"use client"
// export { getStaticProps } from "./api/server/index"
// export { ContentProvider as default } from "./api/builder"
import { LayoutProvider } from "../layout/context/layoutcontext"
import Layout from "../layout/layout"
import Dashboard from "./dashboard"
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.css"
import { LayoutContext } from "../layout/context/layoutcontext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Builder from "./builder";
import {ContentProvider} from "./api/builder"

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
        console.log(response)
        if(response.auth){
           setAuth(true)
        }
    }
    AuthCheck()
    })
   
    return(
        <>
        {
        auth?
        <Layout>   
            {/* <Dashboard/>{console.log(auth,"auth")} */}
            {/* <Builder/> */}
            {/* {ContentProvider([

            ])} */}
            <div className=" flex flex-row justify-center pt-[100px]">
                <h1 className=" font-bold text-black">Welcome to Dashboard</h1>
            </div>
        </Layout>
        :
        <p>Loading...</p>
        }
        </>
    )
}
export default HomePage



