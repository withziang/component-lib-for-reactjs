// ---------------------------      React Lib       ----------------------------------------------------------------
import {useEffect, useRef, useState} from 'react';
// ---------------------------      Bootstrap Lib   ----------------------------------------------------------------

// ---------------------------      Material UI Lib ----------------------------------------------------------------

// ---------------------------      Other Lib       ----------------------------------------------------------------
import {Step, Stepper} from 'react-form-stepper';
// ---------------------------      Local Comp      ----------------------------------------------------------------

const Stepper = () => {
    // ---------------------- hooks --------------------------------------------------
    const [steps, setSteps] = useState([]);                   // physical steps element
    const [currentStep, setCurrentStep] = useState(0);     // physical steps element
    const [currentLaneID, setCurrentLaneID] = useState(''); // for display
    const stopCount = useRef(0);
    // --------------------- Handle Function -----------------------------------------

    // --------------------- Other ---------------------------------------------------

    const ConnectorStyleProps = {
        disabledColor: 'rgba(193,192,192,0.44)',
        activeColor: '#2dcc1a',
        completedColor: '#2dcc1a'
    }

    const StepStyleDTO = {
        activeBgColor: '#1271c8',
        inactiveBgColor: 'rgba(193,192,192,0.44)',
        completedBgColor: '#2dcc1a',
        size: '2.5em'
    }
    // --------------------- Function ------------------------------------------------
    useEffect(() => {
        setSteps(()=>{
            return [].reduce((acc, key)=>{
                return [...acc, <Step label={`lane #${acc.length + 1}`} key={acc.length + 1}/>]
            },[]);
        });
    }, []);
    // --------------------- HTML ----------------------------------------------------
    return (
        <>
            <Stepper activeStep={currentStep} connectorStateColors={true}
                     styleConfig={StepStyleDTO}
                     connectorStyleConfig={ConnectorStyleProps}>
                {steps}
            </Stepper>
        </>
    );
};

export default Stepper;