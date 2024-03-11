import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import searchBanner from "../assets/searchBanner.jpg";
function Search() {
  return (
    <div>
      <div className=" flex justify-center py-16 xs:py-5">
        <div className=" flex flex-col justify-center items-center w-[800px] text-center px-3 xs:px-5 text-white">
          <h1 className="text-3xl ssm:text-4xl md:text-5xl font-bold mb-4 ">
            JokeBook
          </h1>
          <p className="text-lg ssm:text-xl font-semibold mb-4">
            "Laugh Central: Where Comedy Reigns Supreme!"
          </p>
          <h1>© 2022 NITISH RAJ . All Right Reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Search;
