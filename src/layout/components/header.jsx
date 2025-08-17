import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Container,
  Link,
  IconButton,
} from "@mui/material";
import SearchIcon from "../../assets/icons/SearchIcon";
import CartIcon from "../../assets/icons/CartIcon";
import UserIcon from "../../assets/icons/UserIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const Header = () => {
  return (
    <header>
     
      <AppBar position="static" sx={{ bgcolor: "black"  }}>
        <Toolbar sx={{ justifyContent: "center", position: "relative", minHeight:36, }}>
          <Typography variant="body2" color="white">
            Sign up and get 20% off to your first order.{" "}
            <Link
              href="/signup"
              sx={{ color: "white", textDecoration: "underline" }}
            >
              Sign Up Now
            </Link>
          </Typography>

          <IconButton
            size="small"
            sx={{ position: "absolute", right: 10, color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

     
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
            <Typography
              variant="h5" 
              sx={{
                fontWeight: "bold",
                fontSize: "28px", 
                letterSpacing: 1,
                color: "primary.main"
              }}
            >
              SHOP.CO
            </Typography>

            
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link href="/shop" underline="none" color="text.primary">
                Shop
              </Link>
              <Link href="/sale" underline="none" color="text.primary">
                On Sale
              </Link>
              <Link href="/new" underline="none" color="text.primary">
                New Arrivals
              </Link>
              <Link href="/brands" underline="none" color="text.primary">
                Brands
              </Link>
            </Box>

        
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "grey.100",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 5,
                  width: "350px", 
                }}
              >
                <SearchIcon style={{ color: "#777" }} />
                <InputBase
                  placeholder="Search for products..."
                  sx={{ ml: 1, flex: 1 }}
                />
              </Box>
              <IconButton>
                <CartIcon />
              </IconButton>
              <IconButton>
                <UserIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
