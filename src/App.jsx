import { Route, Routes } from "react-router";
import MainLayout from "./layout/main-layout";
import Home from "./home/home";

import ProductDetail from "./pages/ProductDetail"; 
import { NewProducts } from "./home/NewProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new-products" element={<NewProducts />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

