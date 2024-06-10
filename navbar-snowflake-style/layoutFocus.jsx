import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarTabFocus from "./layoutFocus-component/NavbarFocus";




function LayoutFocus(props) {
    return (
        <div>
            <main style={{display: 'flex'}}> {/* Use flexbox */}
                <NavbarTabFocus/>
                <Outlet/>
            </main>
        </div>
    );
}

export default LayoutFocus;