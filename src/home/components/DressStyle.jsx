import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

import casualImg from "../../assets/img/Frame 61.png";
import formalImg from "../../assets/img/Frame 62.png";
import partyImg from "../../assets/img/Frame 64.png";
import gymImg from "../../assets/img/Frame 63.png";
const items = [
  {  img: casualImg },
  { img: formalImg },
  {  img: partyImg },
  {  img: gymImg },
];

export default function DressStyle() {
  return (
    <Box sx={{ background: "#f5f5f5", py: 8, px: 3 }}>
      <Box sx={{ maxWidth: "1400px", mx: "auto", textAlign: "center" }}>
        
        <Typography
          variant="h3" 
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6, fontSize: "40px",color: "primary.main", mr:15 }} 
        >
          BROWSE BY DRESS STYLE
        </Typography>
        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: 3,
                  ml: 4,
                }}
              >
                <CardMedia
                  component="img"
                  height="320"
                   
                  image={item.img}
                  alt={item.label}
                  
                />
            
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}