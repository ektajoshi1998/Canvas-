import React from "react";
import { Box, Button, styled } from "@mui/material";

const Navbar = ({ onAddShapeClick }) => {
   
    const BorderlessButton = styled(Button)({
        border: 'none',
        boxShadow: 'none',
        padding: 0,
        minWidth: 'auto',
        padding:'5px',
        fontSize:'20px',
        textTransform: 'none', 
      });
  return (
    <Box 
     sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-start',  
        
      }} >
       
          <BorderlessButton variant="text">📋 </BorderlessButton>
      <BorderlessButton variant="text" onClick={onAddShapeClick}>
        🔷
      </BorderlessButton>
      <BorderlessButton variant="text" >🅰️</BorderlessButton>
      <BorderlessButton variant="text">🖼️</BorderlessButton>
      <BorderlessButton variant="text">📁</BorderlessButton>
      </Box>
  );
};

export default Navbar;
