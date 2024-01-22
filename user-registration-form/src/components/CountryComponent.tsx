import { Autocomplete, FormLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { CountryProps } from "./UserInterface";

const CountryComponent=({countryHandler,}:CountryProps)=>{
    const { register, handleSubmit } = useForm()
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<string[]>([]);
    const [value, setValue] = useState<string | null>(result[0]);
    useEffect(()=>{
      api('https://restcountries.com/v3.1/all')
    },[])
    const api = async (url: string,name: string='',) => {
      console.log("name",name,name=='')
      let URL=''
      name==''?URL=url:URL=`${url}/${name}`
        const data = await fetch(URL, {
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
        api('https://restcountries.com/v3.1/name',newInputValue)
    }

  }

    return(
        <>
        <FormLabel>Country</FormLabel>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={result}
      value={value}
      inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          countryHandler(newInputValue)
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