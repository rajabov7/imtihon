import { Grid, Typography, Link, Box } from "@mui/material";

const sections = {
  COMPANY: ["About", "Features", "Works", "Career"],
  HELP: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  FAQ: ["Account", "Manage Deliveries", "Orders", "Payments"],
  RESOURCES: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
};

const FooterLinks = () => {
  return (
    <Grid container spacing={6} justifyContent="flex-start">
      {Object.entries(sections).map(([title, items]) => (
        <Grid item xs={6} sm={3} key={title}>
         
          <Typography 
            sx={{ 
              fontFamily: "'Integral CF', sans-serif",
              fontWeight: 700,
              fontSize: "18px", 
              color: "common.black",
              mb: 2
            }}
          >
            {title}
          </Typography>

       
          <Box display="flex" flexDirection="column" gap={1}>
            {items.map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: "grey.800", 
                  fontSize: "16px", 
                  pl: 2, 
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterLinks;
