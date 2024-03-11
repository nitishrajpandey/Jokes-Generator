import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import searchBanner from "../assets/searchBanner.jpg";

function Header() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center   bg-black"
      style={{
        backgroundImage: `url(${searchBanner})`,
      }}
    >
      <Navbar />
      <Search />
    </div>
  );
}

export default Header;
