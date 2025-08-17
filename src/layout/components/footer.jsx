import { Box, Typography, Divider, Container } from "@mui/material";
import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "footer.bg", pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
       
        <Newsletter />

       
        <Box mt={8}>
          <Box display="flex" flexWrap="wrap" gap={6} justifyContent="space-between">
            
            <Box maxWidth="280px">
              <Typography 
                sx={{ 
                  fontFamily: "'Integral CF', sans-serif", 
                  fontSize: "22px", 
                  fontWeight: 800,color: "primary.main" 
                }}
              >
                SHOP.CO
              </Typography>
              <Typography variant="footerText" mt={2}>
                We have clothes that suits your style and which you're proud to wear. 
                From women to men.
              </Typography>
              <SocialIcons />
            </Box>

            
            <FooterLinks />
          </Box>

          <Divider sx={{ my: 4 }} />

         
          <Box 
            display="flex" 
            justifyContent="space-between" 
            flexWrap="wrap" 
            alignItems="center"
          >
            <Typography variant="footerText">
              Shop.co © 2000-2023, All Rights Reserved
            </Typography>
            <Box display="flex" gap={1}>
              <img src="/Badge (1).png" alt="visa" height="50" />
              <img src="/Badge.png" alt="paypal" height="50" />
              <img src="/Badge (1).png" alt="apple pay" height="50" />
              <img src="/Badge.png" alt="gpay" height="50" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
