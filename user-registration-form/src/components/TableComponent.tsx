import DataTables, { Api, Config } from "datatables.net";
import DataTable from "datatables.net-dt";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useRef } from "react";
import { FieldValues } from "react-hook-form";
import $ from 'jquery';
import { useSelector } from "react-redux";
import StyledTable from "../styledComponents/styledTable";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

const TableComponent=({...props}:Config)=>{
    const tableRef = useRef<HTMLTableElement|null>(null);
     const userdata=useSelector((state:FieldValues)=>state.userList)
     let dt: Api<any>
     console.log("---------------------userdata-----------------",userdata)
    useEffect(()=>{
        console.log("no change in data")
    },[])
    useEffect(() => {
        console.log("running only once")
        // tableRef.current?.remove()
            // const dt = new DataTables(tableRef.current!,{...props})
            return () => {
                // dt.destroy()
                console.log("---stopping")
            };  
        
      }, []);
    return(
        <>
        <TableContainer component={Paper}>
<StyledTable sx={{ minWidth: 650 }} aria-label="simple table" className="basic-table">
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">Age</TableCell>
      <TableCell align="right">Sex</TableCell>
      <TableCell align="right">Mobile</TableCell>
      <TableCell align="right">Gov id type</TableCell>
      <TableCell>Gov id</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>State</TableCell>
        <TableCell>City</TableCell>
        <TableCell>Pincode</TableCell>
        <TableCell>Addess</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {userdata.map((item: {
            mobile: ReactNode;
            idType: ReactNode;
            gov_id: ReactNode;
            country: ReactNode;
            state: ReactNode;
            city: ReactNode;
            pincode: ReactNode; name: string | Iterable<ReactNode> | ReactPortal | null | undefined; 
            age: string | number | null | undefined; sex: string | number | null | undefined; 
            address: ReactNode;
}) => (
      <TableRow
        // key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
         <TableCell>{item.name}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.sex}</TableCell>
            <TableCell>{item.mobile}</TableCell>
            <TableCell>{item.idType}</TableCell>
            <TableCell>{item.gov_id}</TableCell>
            <TableCell>{item.country}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.pincode}</TableCell>
            <TableCell>{item.address}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</StyledTable>
</TableContainer>
        </>
    )
}


export default TableComponent;