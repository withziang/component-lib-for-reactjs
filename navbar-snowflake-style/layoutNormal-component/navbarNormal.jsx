import React from 'react';

import {
    Box,
    SwipeableDrawer,
    Divider
} from '@mui/material';

import NavbarNormalButton from "./navbarNormal-component/navbarNormalButton";
import logo from '...';                                  {/*change here*/}

function NavbarNormal(props) {
    const list = (
        <Box
            sx={{
                width: 200,
                flexShrink: 0,
                overflow: 'hidden',
            }}
            role="presentation"
        >
            <div className="d-flex justify-content-center align-items-center" style={{height: '11vh'}}>
                <img src={logo} style={{transform: 'scale(0.9)'}} alt="logo"/>
            </div>


            <Divider variant='middle'/>
            <NavbarNormalButton texts={['Home']}/>        {/*change here*/}
            <Divider variant='middle'/>
            <NavbarNormalButton texts={[]}/>              {/*change here*/}
            <Divider variant='middle'/>

        </Box>
    );
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <SwipeableDrawer
                    sx={{
                        width: 200,
                        flexShrink: 0,
                        overflow: 'hidden',
                    }}
                    variant="permanent"
                    anchor="left"
                    open
                >
                    {list}
                    <div className="d-flex align-items-end justify-content-end p-2" style={{width: '100%', height: '100%'}}>
                        {/*any csv-logo or user csv-logo*/}
                    </div>
                </SwipeableDrawer>
            </Box>
        </>
    );
}

export default NavbarNormal;