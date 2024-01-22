import { Autocomplete, FormLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

const CountryComponent=()=>{
    const { register, handleSubmit } = useForm()
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<string[]>([]);
    const api = async (name: string) => {
        const data = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
          method: "GET"
        });
        const jsonData = await data.json();
        console.log(jsonData)
        let countryList:string[]=[]
        jsonData.forEach((element: any) => {
            console.log(element.name.common)
            countryList.push(element.name.common)
        }); 
         setResult(countryList.slice(0,10));
      };

  const fetchCoutryData=(newInputValue: string)=>{
    let strLength: number = newInputValue.length;
    console.log(newInputValue,'--',strLength)
    if(newInputValue!==undefined && newInputValue!=='' &&strLength>0){
        api(newInputValue)
    }

  }

    return(
        <>
        <FormLabel>Country</FormLabel>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={result}
      inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            fetchCoutryData(newInputValue)
          setInputValue(newInputValue);
        }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
      {...register("country")}
    />
        </>
    )
}

export default CountryComponent