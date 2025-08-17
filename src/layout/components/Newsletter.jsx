import { Box, TextField, Button, Typography } from "@mui/material";
import EmailIcon from "../../assets/icons/EmailIcon"; 

const Newsletter = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "secondary.main",
        p: { xs: 3, md: 6 },
        borderRadius: "20px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
    
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Integral CF', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
          lineHeight: 1.4,
          maxWidth: "400px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </Typography>

    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email address"
          InputProps={{
            startAdornment: <EmailIcon style={{ marginRight: 8 }} />,
          }}
          sx={{
            bgcolor: "secondary.main",
            borderRadius: "50px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              fontSize: "14px",
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "secondary.main",
            color: "primary.main",
            borderRadius: "50px",
            py: 1.5,
            fontSize: "14px",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "grey.100",
            },
          }}
        >
          Subscribe to Newsletter
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
