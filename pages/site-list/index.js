import TableDemo from "../uikit/table/index"
import Layout from "../../layout/layout";
import SiteTable from "../../builder-components/Editor/site-table";
import { useContext,useEffect } from "react";
import { UserContext } from "../../layout/context/usercontext";
import { LayoutContext } from "../../layout/context/layoutcontext";
import {useRouter} from "next/router"
import { ProgressSpinner } from "primereact/progressspinner";

const SiteList=()=>{
      const {UserDetails,setUserDetails,auth}=useContext(LayoutContext)
      console.log(UserDetails)
      const router=useRouter()

      
      useEffect(() => {
        const checkSession = async () => {
            const data = { action: "session" };
            const response = await fetch("/api/auth/middleware", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ data })
            }).then((res) => res.json());
            setUserDetails(response);
            console.log(response, "response", UserDetails, UserDetails.length);
        };
        if (UserDetails.length === 0) {
            checkSession();
        }

        // const checkStatus = () => {
        //     if (!auth) {
        //         router.push("/auth/login");
        //     }
        // };
        // checkStatus();
        }, [UserDetails, setUserDetails, auth, router]);
    
        // if (!auth || UserDetails.length === 0) {
        //     return <div className=" flex justify-center items-center w-full h-screen"><ProgressSpinner /></div>;
        // }

      

    return(
        <Layout>
        <div>
            <SiteTable />
        </div>
        </Layout>
    )
}

export default SiteList;


