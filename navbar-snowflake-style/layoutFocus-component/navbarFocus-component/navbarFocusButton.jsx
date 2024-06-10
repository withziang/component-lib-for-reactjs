import React from 'react';
import {NavLink} from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
    Link,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home'; /*add more icon here*/

const textToIcon = {
    'Home': <HomeIcon/>
}


function NavbarFocusButton({texts}) {
    return (
        <>
            <List>
                {texts.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton  component={Link}
                                         to={`/${text.toLowerCase()}`} sx={{width:'50px'}}>
                            <ListItemIcon>
                                {textToIcon[text]}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default NavbarFocusButton;