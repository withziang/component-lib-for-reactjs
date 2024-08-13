// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, useState, memo, cloneElement} from "react";
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {Box, Stack} from '@mui/material';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------
import rowItem from "./rowItem";


const ListSection = () => {
    // ---------------------- hooks --------------------------------------------------
    const [rows, setRows] = useState([]); // logos row not data
    const [currentDisplay, setCurrentDisplay] = useState(-1);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------
    const handleUpdate = (rows) => { // no point to use useCallBack
        return rows.map((row, index) => {
            return cloneElement(row, {
                index: index, key: index
            });
        });
    };

    const handleRemove = (index) => { // no point to use useCallBack
        // delete the row => update the current => delete the dictionary item
        setRows(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            setCurrentDisplay(updated.length - 1);
            return handleUpdate(updated);
        });
    };

    const addRow = () => {
        let temp;
        setRows(prev => {
            temp = prev.length;
            return [
                ...handleUpdate(prev),
                <rowItem key={prev.length} index={prev.length} handleDelete={handleRemove}
                         setCurrentDisplay={setCurrentDisplay}/>,
            ];
        });
        setCurrentDisplay(temp);
    };



    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stack>
                {rows}
            </Stack>
        </>
    );
};

export default ListSection;