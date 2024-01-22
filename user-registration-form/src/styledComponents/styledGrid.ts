// import { styled } from "@mui/material";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledGrid = styled(Grid)(({}) => ({
    '&.flext-start-center':{
        justifyContent: "center",
        alignItems:'center',
        gap:'10px'
      },
    
    '&.margin-auto':{
      margin:'auto'
    },
    '&.cardContainer':{
    border: '1px solid grey',
    padding: '10px',
    borderRadius: '20px',
    borderWidth: '3px'
    }
  }));

export default StyledGrid;

// gap={'10px'} justifyContent={'flex-start'} alignItems={'center'}