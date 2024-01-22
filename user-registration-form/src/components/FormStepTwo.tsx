import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { FieldValues, useForm } from "react-hook-form"
import CountryComponent from "./CountryComponent"
import { useDispatch, useSelector } from "react-redux"
import StyledGrid from "../styledComponents/styledGrid"
import { userAddressSchema } from "./userSchema"
import * as yup from 'yup';
import { useState } from "react"

const FormStepTwo = ({personalData}:FieldValues) => {
    const dispatch=useDispatch()
    const { register, handleSubmit } = useForm()
    const [error,setError]=useState<string[]>()

    const onSubmitHandler=(addressData: FieldValues)=>{
        let data={...personalData,...addressData}
        let submitform=false
        try{
            const parsedUser=userAddressSchema.cast(data)
            userAddressSchema.validateSync(
                parsedUser,
                { strict: true },
              )
              submitform=true
        }catch(error){
            if (error instanceof yup.ValidationError) {
                // Log the validation errors to the console
            console.error(error.errors)
            let e=error.errors
            setError(e)
            submitform=false
        }else{
            console.log(error)
            let e=['Please fill all the required fields']
            setError(e)
        }
           
          };
        console.log("step two",data)
        submitform && dispatch({type:'add_user',payload:data})

    }

    const countryDataHandler=(country: any)=>{
        console.log(country)
    }
    return (
        <>
            <Grid>
                <h3>Address Details:</h3>
                <StyledGrid container direction={'column'} gap={'10px'} maxWidth={'500px'} className="margin-auto cardContainer">
                    <StyledGrid container item className="flext-start-center">
                        <FormLabel>Address</FormLabel>
                        <TextField label="Enter Address" variant="outlined" {...register("address")}></TextField>
                    </StyledGrid>
                    <StyledGrid container item className="flext-start-center" flexWrap={'nowrap'}>
                        <FormLabel>State</FormLabel>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Gov_Id"
                                {...register("state")}
                            >
                                <MenuItem value={'male'}>Maharashtra</MenuItem>
                                <MenuItem value={'female'}>Karnataka</MenuItem>
                            </Select>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid container item className="flext-start-center" flexWrap={'nowrap'}>
                        <FormLabel>City</FormLabel>
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Gov_Id"
                                {...register("city")}
                            >
                                <MenuItem value={'male'}>Maharashtra</MenuItem>
                                <MenuItem value={'female'}>Karnataka</MenuItem>
                            </Select>
                        </FormControl>
                    </StyledGrid>
                    <StyledGrid container item className="flext-start-center">
                        <CountryComponent />
                    </StyledGrid>
                    <StyledGrid container item className="flext-start-center">
                        <FormLabel>Pincode</FormLabel>
                        <TextField label="Enter Name" variant="outlined" {...register("pincode")}></TextField>
                    </StyledGrid>
                    <Grid>
                        <Button variant="outlined"  onClick={handleSubmit((data)=>{onSubmitHandler(data)})}>Submit</Button>
                    </Grid>
                </StyledGrid>
                <h4 style={{color:'red'}}>{error}</h4>
            </Grid>
        </>
    )

}

export default FormStepTwo