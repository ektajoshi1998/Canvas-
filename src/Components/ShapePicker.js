import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Box } from '@mui/material';

const ShapePickerDialog = ({ open, onClose, onSelectShape }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select a Shape</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection='column' gap={2} mt={1}>
          <Button variant="outlined" onClick={() => onSelectShape('rect')}>Rectangle</Button>
          <Button variant="outlined" onClick={() => onSelectShape('circle')}>Circle</Button>
          <Button variant="outlined" onClick={() => onSelectShape('star')}>Star</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ShapePickerDialog;
