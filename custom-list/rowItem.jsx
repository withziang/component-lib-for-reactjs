// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, useState} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Stack, Box, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const RowItem = ({index, handleDelete, setCurrentDisplay}) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stack direction="row" className="d-flex align-items-center" sx={{mb: 1, width: 'fit-content'}} spacing={1}>
                <CircleIcon color="primary"/>
                <h6 style={{minWidth: '2rem'}}>#{index + 1}</h6>



                <IconButton aria-label="EditIcon" size="small" color="info"
                            onClick={() => {
                                setCurrentDisplay(index);
                            }}>
                    <EditIcon fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" size="small" color="error" onClick={() => handleDelete(index)}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </Stack>
        </>
    );
};

export default RowItem;