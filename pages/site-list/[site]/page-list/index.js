import Layout from "../../../../layout/layout";
import EditorTable from "../../../../builder-components/Editor/Editor-table";
import { useContext,useEffect } from "react";
import { LayoutContext } from "../../../../layout/context/layoutcontext";
import {useRouter} from "next/router"

const PageList=()=>{
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
            {/* <TableDemo /> */}
            <EditorTable />
        </div>
        </Layout>
    )
}

export default PageList;


