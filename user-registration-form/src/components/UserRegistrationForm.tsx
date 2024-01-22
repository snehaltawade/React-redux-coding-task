import { useState } from "react";
import FormStepTwo from "./FormStepTwo";
import FormStepOne from "./FormStepOne";
import { FieldValues } from "react-hook-form";
import TableComponent from "./TableComponent";

const UserRegistrationForm=()=>{
    const[showNextStep,setShowNextStep]=useState(false)
    const [personalData,setPersonalData]=useState<FieldValues>()
    
    const stepChangeHandler=(data:FieldValues)=>{
        setShowNextStep(true)
        setPersonalData(data)
        console.log("called",data)
    }
    const toggleStepChangeHandler=()=>{
        setShowNextStep(!showNextStep)
    }
    return(
        <>
        {showNextStep?<FormStepTwo personalData={personalData} toggleStepChangeHandler={toggleStepChangeHandler}/>:<FormStepOne onNextClick={stepChangeHandler} />}
        </>
    )
}

export default UserRegistrationForm;