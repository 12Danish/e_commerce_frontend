import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import Register from "./pages/Register.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import Login from "./pages/Login.tsx";
import ProductListPage from "./pages/ProductListPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product_list(/:type)(/:type_name)" element={<ProductListPage />} />
          <Route path="/product_detail/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
