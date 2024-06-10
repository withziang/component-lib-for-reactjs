import React from 'react';

import {
    Box,
    SwipeableDrawer,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import NavbarFocusButton from "./navbarFocus-component/navbarFocusButton";

function NavbarFocus(props) {
    const list = (
        <Box
            sx={{
                width: 56,
                flexShrink: 0,
                overflow: 'hidden',

            }}
            role="presentation"
        >
            <div className="d-flex justify-content-center align-items-center" style={{height: '10vh'}}>
                <MenuIcon sx={{ color: 'var( --root-custom-color-cold-blue)'}}/>
            </div>
            <Divider/>
            <NavbarFocusButton texts={['Home']}/>             {/*change here*/}
            <Divider />
            <NavbarFocusButton texts={[]}/>                   {/*change here*/}
            <Divider />

        </Box>
    );
    return (
        <Box sx={{display: 'flex'}}>
            <SwipeableDrawer
                sx={{
                    width: 56,
                    flexShrink: 0,
                    overflow: 'hidden',
                }}
                variant="permanent"
                anchor="left"
                open
            >
                {list}
                <div className="d-flex align-items-end justify-content-end p-2" style={{width: '100%', height: '100%'}}>
                    <div style={{bottom: 0, left: 0}}>
                        {/*any csv-logo or user csv-logo*/}
                    </div>

                </div>
            </SwipeableDrawer>
        </Box>
    );
}

export default NavbarFocus;