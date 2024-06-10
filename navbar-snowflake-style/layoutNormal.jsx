import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarNormal from "./layoutNormal-component/navbarNormal";

function LayoutNormal(props) {
    return (
        <>
            <main style={{display: 'flex'}}> {/* Use flexbox */}
                <NavbarNormal/>
                <Outlet/>
            </main>
        </>
    );
}

export default LayoutNormal;