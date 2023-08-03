
import React, { useEffect } from 'react';
import { useContext,useState } from 'react';
import Layout from '../../layout/layout';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import EmptyError from '../../builder-components/Error/EmptyError';
import { ProgressBar } from 'primereact/progressbar';

const Profile = () => {
    const {UserDetails,setUserDetails,auth}=useContext(LayoutContext)
    const {user}=UserDetails
    const router=useRouter()
    const [message,setMessage]=useState(null)
    const [progress,setProgress]=useState(false)
    console.log(UserDetails,"userDetails",user)

    useEffect(()=>{
      const checkStatus=()=>{
          if(!auth){
             router.push("/auth/login")
          }
      }
      checkStatus()
  })

    const handleLogout=async()=>{
      setProgress(true)
      const data={action:"logout"}
      await  fetch("/api/auth/middleware",
      {headers:{"Content-type":"application/json"},
      method:"POST",
      body:JSON.stringify({data})
    }).then((res)=>res.json()).then(res=>{if(res.message){setMessage(res.message);router.push("/")}})
    }
    
  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        {message&&<EmptyError color="success" text={message}/>}
        {progress&&<ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>}
        {/* <img src="/profile-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" /> */}
        <h1 className="text-2xl font-bold text-center">Welcome! {user&&user.name}</h1>
        <p className="text-gray-600 text-center">User</p>
        <div className='flex justify-center items-center mt-5'>
        <Button label="Logout" onClick={handleLogout} className="p-button-secondary w-full" />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
