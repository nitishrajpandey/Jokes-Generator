import React from "react";
import Header from "./Components/Header";

import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HindiJoke from "./Pages/HindiJoke/HindiJoke";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories/:id" element={<Categories />} />
        <Route path="/Hindi" element={<HindiJoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
