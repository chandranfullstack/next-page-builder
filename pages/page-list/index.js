import TableDemo from "../uikit/table/index"
import Layout from "../../layout/layout";
import EditorTable from "../../builder-components/Editor/Editor-table";
import { useContext,useEffect } from "react";
import { UserContext } from "../../layout/context/usercontext";
import { LayoutContext } from "../../layout/context/layoutcontext";

const PageList=()=>{
      const {UserDetails,setUserDetails,auth}=useContext(LayoutContext)
      console.log(UserDetails)

      useEffect(()=>{
        const checkStatus=()=>{
            if(!auth){
               router.push("/auth/login")
            }
        }
        checkStatus()
        })
      
       useEffect(()=>{
         const checkSession=async()=>{
            
             const data={action:"session"}
             const response=await fetch("/api/auth/middleware",
             {method:"POST",
             headers:{"Content-type":"application/json"},
             body:JSON.stringify({data})
             }).then((res)=>res.json())
             setUserDetails(response)
             console.log(response,"response",UserDetails,UserDetails.length)
         }
         if(UserDetails.length===0){
         checkSession()}
     },[UserDetails,setUserDetails])

    return(
        <Layout>
        <div>
            {/* <TableDemo /> */}
            <EditorTable />
        </div>
        </Layout>
    )
}

export default PageList;


