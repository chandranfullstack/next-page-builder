import { useRouter } from 'next/router';
import React, { useContext, useState,useEffect } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { LayoutProvider } from '../../../layout/context/layoutcontext';
import Layout from '../../../layout/layout';
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios"

const Register = () => {
    const [user,setUser]=useState("")
    const [password, setPassword] = useState('');
    const [username,setUsername]=useState("")
    const [checked, setChecked] = useState(false);
    const { layoutConfig ,setAuth,auth} = useContext(LayoutContext);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSignIn=async()=>{
        setError(null)
       if(password==="admin"&&user==="admin"){
         localStorage.setItem("auth",true)
         setAuth(true)
         router.push("/")
       }else{
        // router.push("/login")
        const data={username:username,email:user,password:password,action:"register"}
        console.log(data)
        const response=await fetch("/api/auth/middleware",
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({data})}).then((res)=>res.json())
        console.log(response)
        if(response.error){
            setError(response.error)
        }else{
         router.push("/")
        }
    }}
    const handleChange=(value)=>{
          setUser(value)
          console.log(value,"value",user)
    }
    
    useEffect(()=>{
      if(auth){
        router.push("/")
        console.log(auth,"auth")
      }
    })
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center mt-2">
                {/* <Image src={`/home/logoblack.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" width={24} height={24} /> */}
                <Image src="/builder/site-logo.png" alt="Image" height={20} className="mb-3" width={350} />
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Welcome to Fulgid</div>
                            <span className="text-600 font-medium">Register as New User</span>
                        </div>
                        <div>
                        <div className="flex justify-content-center mb-10">
                        <span className="p-float-label">
                        <InputText inputid="email1" type="text" placeholder='Enter user name'  className="border-slate-300 w-full md:w-30rem" style={{ padding: '1rem' }} onInput={(e)=>setUsername(e.target.value)} />
                        <label htmlFor="email1" className="border-slate-300 block text-900 text-xl font-medium">
                                user name
                        </label>
                        </span>
                        </div>
                        <div className="flex justify-content-center mb-10">
                        <span className="p-float-label">
                            <InputText inputid="email1" type="text" placeholder="Enter Email address" className="border-slate-300 w-full md:w-30rem" style={{ padding: '1rem' }} onInput={(e)=>handleChange(e.target.value)} />
                            <label htmlFor="email1" className="border-slate-300 block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                        </span>
                        </div>
                        <div className="flex justify-content-center mb-10">
                        <span className="p-float-label">
                        <Password inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"  className="border-slate-300 w-full" inputClassName="w-full p-3 md:w-30rem"></Password>
                        <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                            Password
                        </label>
                        </span>
                        </div>
                            <Button label="Sign Up" className="w-full p-3 text-xl" onClick={handleSignIn}></Button>
                            {error && <div className="text-center text-red-600 mt-2">{error}</div>}
                            <div className='w-full text-center'>
                                <p>Or</p>
                                <Link href={"/auth/login"} >Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Register.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default Register
