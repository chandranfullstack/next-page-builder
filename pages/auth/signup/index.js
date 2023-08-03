import { useRouter } from 'next/router';
import React, { useContext, useState,useEffect ,useRef} from 'react';
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
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';

const Register = () => {
    const [user,setUser]=useState("")
    const [password, setPassword] = useState('');
    const [username,setUsername]=useState("")
    const [checked, setChecked] = useState(false);
    const { layoutConfig ,setAuth,auth} = useContext(LayoutContext);
    const [error, setError] = useState(null);
    const router = useRouter();
    const toast = useRef(null);
    const [progress,setProgress]=useState(false)

    const handleSignIn=async()=>{
        setError(null)
        if (username.trim() === '') {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter a username', life: 3000 });
            return;
        }

        if (user.trim() === '') {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter an email address', life: 3000 });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user)) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter a valid email address', life: 3000 });
            return;
        }

        if (password.trim() === '') {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter a password', life: 3000 });
            return;
        }

        setProgress(true)
        const data={username:username,email:user,password:password,action:"register"}
        console.log(data)
        const response=await fetch("/api/auth/middleware",
        {method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({data})}).then((res)=>res.json())
        console.log(response)
        if(response.error){
            if(response.error==="Username or email already exists"){
               toast.current.show({severity:"warn",summary:"Alert",detail:"You aleready registered kindly Log In and continue",life:3000})
            }else{
                toast.current.show({severity:"error",summary:'Error',detail:response.error,life:3000})
            }
            setProgress(false)
            setError(response.error)
        }else{
         router.push("/")
        }
    }
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
            <Toast ref={toast} />
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
                        <div>                        
                            {progress?<ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar> :
                            <div>
                            <Button label="Sign Up" className="w-full p-3 text-xl" onClick={handleSignIn}></Button>
                            <div className='w-full text-center'>
                                <p>Or</p>
                                <Link href={"/auth/login"} >Sign In</Link>
                            </div>
                            </div>
    }                       </div>
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
