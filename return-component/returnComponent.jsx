import React from 'react';

import {LogoExit} from "./logo";  // use svg logo

function ReturnComponent({displayText, ifHref = true, link, returnHome, setReturnHome}) {
    const handleClick = () => {
        setReturnHome(!returnHome);
    }
    const handleLinkClick = () => {
        window.location.href = link; // Navigate using window.location.href
    };
    return (
        <>
            <span>
                <button className="link-dark m-2 d-inline border-0" onClick={(ifHref) ? handleLinkClick : handleClick}
                        style={{
                            textDecoration: 'none', cursor: 'pointer', backgroundColor: 'transparent',
                            width: 'fit-content', alignItems: 'baseline'
                        }}>
                    <span style={{marginRight: '2px'}}>
                        <LogoExit/>
                    </span>
                    {displayText}
                </button>
            </span>
        </>
    );
}

export default ReturnComponent;
