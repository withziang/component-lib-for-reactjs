// ---------------------------      React Lib       ----------------------------------------------------------------

// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------
import {ButtonGroup, Box} from '@mui/material';
import ButtonMUI from '@mui/material/Button';
// ---------------------------      Other Lib       ----------------------------------------------------------------

// ---------------------------      Local Comp      ----------------------------------------------------------------

const ModernMaterialUiButton = () => {
    // ---------------------- hooks --------------------------------------------------
    const activeColor = "#4b616e";
    const disableColor = "rgba(103,102,102,0.24)";
    let [firstButtonColor, setFirstButtonColor] = useState(activeColor);
    let [secondButtonColor, setSecondButtonColor] = useState(disableColor);

    // --------------------- Handle Function -----------------------------------------
    const handleOnClickFirstButton = () => {
        if (firstButtonColor === disableColor) {
            setFirstButtonColor(activeColor);
            setSecondButtonColor(disableColor);

        }
    }
    const handleOnClickSecondButton = () => {
        if (secondButtonColor === disableColor) {
            setFirstButtonColor(disableColor);
            setSecondButtonColor(activeColor);

        }
    }
    // --------------------- Other ---------------------------------------------------

    // --------------------- Function ------------------------------------------------

    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <ButtonMUI onClick={handleOnClickFirstButton}
                           sx={{width: '200px', backgroundColor: firstButtonColor}}>New Client</ButtonMUI>
                <ButtonMUI onClick={handleOnClickSecondButton}
                           sx={{width: '200px', backgroundColor: secondButtonColor}}>Existing Client</ButtonMUI>
            </ButtonGroup>
        </>
    );
};

export default ModernMaterialUiButton;