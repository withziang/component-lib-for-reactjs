// ---------------------------      React Lib       ----------------------------------------------------------------

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------



const DropDownComponent = ({title, value, helperText, onChange, list, required = false, error= false}) => {
    // ---------------------- hooks --------------------------------------------------

    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <TextField
                select
                variant="standard"
                label={title}
                value={value}
                helperText={helperText}
                onChange={onChange}
                required={required}
                error={error}
            >
                {list.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{fontSize:'0.9rem'}}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
};

export default DropDownComponent;