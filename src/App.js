import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/admin/home";
import Payment from "./views/admin/Payment";
import Shipping from "./views/admin/Shipping";
import Admin from "./views/admin/Admin";
import Customer from "./views/admin/Customer";
import Brand from "./views/admin/Brand";
import Category from "./views/admin/Category";
import Color from "./views/admin/Color";
import Size from "./views/admin/Size";
import Discount from "./views/admin/Discount";
import Voucher from "./views/admin/Voucher";
import Order from "./views/admin/Order";
import Product from "./views/admin/Product";
import ImageLibrary from "./views/admin/ImageLibrary";

import Test from "./views/admin/test";
import Login from "./views/login";
import Profile from "./views/admin/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/size" element={<Size />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/color" element={<Color />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/voucher" element={<Voucher />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/image-library" element={<ImageLibrary />} />

        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
