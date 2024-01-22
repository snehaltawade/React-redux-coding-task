// import { styled } from "@mui/material";
import styled from "@emotion/styled";
import { Grid, Table } from "@mui/material";

const StyledTable = styled(Table)(({}) => ({
    '&.basic-table':{
    margin: '10px auto',
    padding: '10px',
    border: '1px solid black',
    width:'70%',
    backgroundColor:'wheat',
    'th,tr,td':{
        border: '1px solid white',
    }
    }
  }));

export default StyledTable;
