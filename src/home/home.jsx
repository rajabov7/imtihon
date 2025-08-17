import { Box } from "@mui/material";
import Hero from "./components/hero";
import HeroSection from "./components/HeroSection";
import DressStyle from "./components/DressStyle";
import { NewProducts } from "./NewProducts";
import { NewProductss } from "./NewProductss";


const Home = () => {
  return (
   <Box>
    <Hero />
    <NewProducts />
    <NewProductss />
    <DressStyle />
    <HeroSection />
   
   </Box>
 
  );
};

export default Home;

