// import { styled } from "@mui/material";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledTable = styled('table')(({}) => ({
    '&.basic-table':{
    margin: '10px auto',
    padding: '10px',
    border: '1px solid black'
    }
  }));

export default StyledTable;
