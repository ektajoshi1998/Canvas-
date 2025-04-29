import React from "react";
import {
  Dialog,
  DialogTitle,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Grid,
  Paper,
  Button,
  styled,
} from "@mui/material";
import { Circle, RectangleHorizontal, RectangleHorizontalIcon, Square, StarIcon } from "lucide-react";
import { Star } from "react-konva";

const categories = [
  "Basic",
  "Geometry",
  "Objects",
  "Animals",
  "Nature",
  "Food",
  "Symbols",
  "Education",
  "Arts",
  "Science",
  "People",
  "Places",
  "Activities",
];



const ShapeDialog = ({ open, onClose, onSelectShape }) => {

    
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <Box display="flex" height="500px">
        <Box width="200px" bgcolor="#f5f5f5" p={1} overflow="auto">
          <TextField
            size="small"
            placeholder="Search"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <List dense>
            {categories.map((cat) => (
              <ListItem button key={cat}>
                <ListItemText primary={cat} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex={1} bgcolor="white" p={2} overflow="auto">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button
                sx={{
                  margin: "4px",
                  cursor: "pointer",
                }}
                variant="text"
                onClick={() => onSelectShape("rect")}
              >
                <RectangleHorizontalIcon/>
              </Button>
              <Button
              sx={{
                  margin: "4px",
                  cursor: "pointer",
                }}
                variant="text"
                onClick={() => onSelectShape("circle")}
              >
                <Circle/>
              </Button>
              <Button
              sx={{
                  margin: "4px",
                  cursor: "pointer",
                }} variant="text" onClick={() => onSelectShape("star")}>
                <StarIcon/>
              </Button>
            </Grid>
            {/* ))} */}
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ShapeDialog;
