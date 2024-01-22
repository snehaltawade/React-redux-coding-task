import DataTables, { Api, Config } from "datatables.net";
import DataTable from "datatables.net-dt";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useRef } from "react";
import { FieldValues } from "react-hook-form";
import $ from 'jquery';
import { useSelector } from "react-redux";
import StyledTable from "../styledComponents/styledTable";

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
        <StyledTable ref={tableRef} className="basic-table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Gov id type</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {userdata.map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; age: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; sex: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; mobile: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; idType: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; address: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.sex}</td>
            <td>{item.mobile}</td>
            <td>{item.idType}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
        </StyledTable>
        </>
    )
}

export default TableComponent;