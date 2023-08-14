import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import { classNames, DomHandler } from 'primereact/utils';
import React, { useContext, useEffect, useRef } from 'react';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import AppConfig from './AppConfig';
import { LayoutContext } from './context/layoutcontext';
import PrimeReact from 'primereact/api';
import { ProgressSpinner } from 'primereact/progressspinner';


const Layout = (props) => {
    const { layoutConfig, 
        layoutState, 
        setLayoutState ,
        onMenuToggle,auth,
        setAuth,UserDetails,
        setUserDetails,progress,setProgress} = useContext(LayoutContext);
    const topbarRef = useRef(null);
    const sidebarRef = useRef(null);

    const router = useRouter();
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));

            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                topbarRef.current.topbarmenu.isSameNode(event.target) ||
                topbarRef.current.topbarmenu.contains(event.target) ||
                topbarRef.current.topbarmenubutton.isSameNode(event.target) ||
                topbarRef.current.topbarmenubutton.contains(event.target)
            );

            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });

    const hideMenu = () => {
        console.log("called hte hidemenu")
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        console.log("called the profilemenuhide")
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: false }));
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = () => {
        DomHandler.addClass('blocked-scroll');
    };

    const unblockBodyScroll = () => {
        DomHandler.removeClass('blocked-scroll');
    };

    useMountEffect(() => {
        PrimeReact.ripple = true;
    })

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
        //setProgress(false)
        if(auth===false){
            router.push("/auth/login")
        }else if(response.auth===false){
            setAuth(false)
            router.push("/auth/login")
        }else if(response.auth===true){
            setProgress(false)
        }
    }
    if(auth===false){
    AuthCheck()
    }
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

    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
        if(router.pathname==="/page-list/editor"){
            console.log("worked")
            onMenuToggle()
        }
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [layoutState.profileSidebarVisible]);

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            hideMenu();
            hideProfileMenu();
        });
    }, []);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });
    console.log(props,"props")
    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple
    });

    

    return (
        <React.Fragment>
            {progress ? (
                <div className="flex justify-center items-center w-full h-screen">
                    <ProgressSpinner />
                </div>
            )  
            :(
            <div className={containerClass}>
            <>
            <AppTopbar ref={topbarRef} />
            <div ref={sidebarRef} className="layout-sidebar">
                <AppSidebar />
            </div>
            <div className="layout-main-container">
                <div className="layout-main">{props.children}</div>
                <AppFooter />
            </div>
            </>
            <div className="layout-mask"></div>
        </div>
            )}
        </React.Fragment>
    );
};

export default Layout;
