import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react"
import { Props } from "./UserInterface"
import  StyledGrid  from "../styledComponents/styledGrid"
import { FieldValues, useForm } from "react-hook-form"
import {userSchema} from "./userSchema"
import { error } from "console"
import * as yup from 'yup';

const FormStepOne:React.FC<any>= ({onNextClick,}:Props)=>{
    const {register,handleSubmit} = useForm()
    const [personalData,setPersonalData]=useState<FieldValues>()
    const [error,setError]=useState<string[]>()

    const onNextButtonClick= async (data: FieldValues)=>{
        console.log("next button clicked",data)
        let showStepTwo=false
        try{
            const parsedUser = userSchema.cast(data)
            userSchema.validateSync(
                parsedUser,
                { strict: true },
              )
              showStepTwo=true
        } catch(error) {
            if (error instanceof yup.ValidationError) {
                // Log the validation errors to the console
            console.error(error.errors)
            let e=error.errors
            setError(e)
            showStepTwo=true
        }
        else{
            console.log(error)
            let e=['Please fill all the required fields']
            setError(e)
        }
           
          };
        
        
        setPersonalData(data)
        showStepTwo && onNextClick(data)
    }
    return(
        <>
            <Grid style={{margin:'auto'}}>
                <h3>Personal Details:</h3>
                <StyledGrid container direction={'column'} gap={'10px'} maxWidth={'500px'} className="margin-auto cardContainer">
                <StyledGrid container item className="flext-start-center" >
                    <FormLabel>Name</FormLabel>
                    <TextField label="Enter Name" variant="outlined" {...register("name")}></TextField>
                </StyledGrid>
                <StyledGrid container item className="flext-start-center" >
                    <FormLabel>Age</FormLabel>
                    <TextField label="Enter Age" variant="outlined" {...register("age",
                    // {required:true,validate: {positive: (v: string) => parseInt(v) > 0,}}
                    )}
      ></TextField>
                </StyledGrid>
                <StyledGrid container item className="flext-start-center" flexWrap={'nowrap'}>
                    <FormLabel>Sex</FormLabel>
                    <FormControl style={{width:'300px'}}>
                    <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    {...register("sex")}
                    >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    
                    </Select>
                </FormControl>
                </StyledGrid>
                <StyledGrid container item className="flext-start-center" >
                    <FormLabel>Mobile</FormLabel>
                    <TextField label="Enter mobile" variant="outlined" {...register("mobile",)}></TextField>  
                    {/* {required:true,pattern: /[0-9]{10}/} */}
                </StyledGrid>
                <StyledGrid container item className="flext-start-center"  flexWrap={'nowrap'}>
                    <FormLabel>Govt Issues Id</FormLabel>
                    <FormControl style={{width:'100px'}}>
                    <InputLabel id="demo-simple-select-label">Id type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Gov_Id"
                    {...register("idType")}
                    >
                    <MenuItem value={'adhar'}>Adhaar</MenuItem>
                    <MenuItem value={'pan'}>PAN</MenuItem>
                    </Select>
                </FormControl>
                    <TextField label="Enter Gov Id" variant="outlined" {...register("gov_id")}></TextField>
                </StyledGrid>
                <Grid>
                    <Button onClick={handleSubmit((data)=>{onNextButtonClick(data)})} variant="outlined" >Next</Button>
                </Grid>
                </StyledGrid>

                <h4 style={{color:'red'}}>{error}</h4>
            </Grid>

        </>
    )
}

export default FormStepOne