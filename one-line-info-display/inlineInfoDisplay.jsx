import React from 'react';

function InlineInfoDisplay({logo, title, number, postfix}) {
    return (
        <>
            <div className="d-inline-flex my-3" style={{width: 'fit-content', alignItems: 'baseline'}}>
                {logo}
                <h6 className="h6 text-black mr-2 mx-1 d-inline" style={{margin: '0 5px'}}>{title}:</h6>
                <h6 className="h6 text-muted mr-2 mx-1" style={{margin: '0 5px'}}>{number}</h6>
                <h6 className="h6 text-black mr-2 mx-1" style={{margin: '0 5px'}}>{postfix}</h6>
            </div>
        </>
    );
}

export default InlineInfoDisplay;