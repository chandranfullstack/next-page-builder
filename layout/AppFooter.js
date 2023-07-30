import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';
import Image from "next/image"

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            Provide
            {/* <Image src={`/builderFooter/logo-dark.svg.png`} alt="Logo" height={20} width={40} className="mr-2" /> */}
            by
            <Image src={`/builder/site-logo.png`} alt="Logo" height={20} width={160} className="mr-2" />
        </div>
    );
};

export default AppFooter;
