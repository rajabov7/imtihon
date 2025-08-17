import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        
        <Grid container alignItems="center" spacing={6}>
    
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "64px", lineHeight: "1.2" }}
            >
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: "18px" }}
            >
              Browse through our diverse range of meticulousl <br /> to bring out your individuality and cater to your sense
              of style.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                mb: 6,
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Shop Now
            </Button>

            <Grid container spacing={6}>
              <Grid item>
                <Typography variant="h2" sx={{ fontWeight: "700",color: "primary.main" }}>
                  200+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  International Brands
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" sx={{ fontWeight: "700",color: "primary.main" }}>
                  2,000+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  High-Quality Products
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2" sx={{ fontWeight: "700",color: "primary.main" }}>
                  30,000+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Happy Customers
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/Rectangle 2.png"
                alt="fashion"
                style={{
                  maxWidth: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

    
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "secondary.main",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "800",
          fontSize: "32px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          py: 4,
          mt: 6,
        }}
      >
        <span>Versace</span>
        <span>Zara</span>
        <span>Gucci</span>
        <span>Prada</span>
        <span>Calvin Klein</span>
      </Box>
    </Box>
  );
};

export default Hero;
