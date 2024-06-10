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


function NavbarNormalButton({texts}) {
    return (
        <>
            <List>
                {texts.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={`/${text.toLowerCase()}`}  // click will direct to ./text page
                            activeClassName="selected"
                            sx={{pl: '2em'}}
                        >
                            <ListItemIcon>
                                {textToIcon[text]}
                            </ListItemIcon>
                            <Typography variant="body1" sx={{
                                fontFamily: 'var(--bs-font-sans-serif)', color: 'var(--root-custom-color-text)',
                                fontWeight: 500, fontSize: '13px'
                            }}>
                                {text}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default NavbarNormalButton;