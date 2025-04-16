import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Loginform from "./pages/login";
import Signup from "./pages/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Service />} path="/service" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Loginform />} path="/loginform" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
