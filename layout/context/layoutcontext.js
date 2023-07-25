"use client"
import React, { useState } from 'react';

export const LayoutContext = React.createContext();
import {useRouter} from "next/router"
export const LayoutProvider = (props) => {
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });
    const [auth,setAuth]=useState(false)
    const [currentPage,setCurrentPage]=useState("home")
    const router=useRouter()
    const [layoutState, setLayoutState] = useState({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
  
    const onMenuToggle = () => {
        console.log("isCicked",layoutState)
        if (isOverlay()) {
            console.log("is on menutoggle in next js")
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
        }

        if (isDesktop()) {
            console.log("isDesktop")
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
            console.log(layoutState,"layout state")
        } else {
            console.log("triggered")
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const isOverlay = () => {
        console.log(layoutConfig.menuMode === 'overlay',"overlay")
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        console.log(window.innerWidth > 991,"called")
        return window.innerWidth > 991 || router.pathname==="/page-list/editor"
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        auth,
        setAuth,
        currentPage,
        setCurrentPage
    };

    return <LayoutContext.Provider value={value}>{props.children}</LayoutContext.Provider>;
};
