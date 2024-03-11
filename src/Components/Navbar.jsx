import React, { useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchedCategories } from "../Store/navbarSlice";
import { ToggleCategories } from "../Store/navbarSlice";
import { fetchCategoriesSearch } from "../Store/categoriesSearchSlice";
import { Link } from "react-router-dom";
import { fetchHindiJokesApi } from "../Store/hindiJokesSlice";

function Navbar() {
  const categories = useSelector((store) => store.navbar.categoriesNames);
  console.log(categories);
  const categoriesToggle = useSelector(
    (store) => store.navbar.categoriesToggle
  );
  console.log(categoriesToggle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedCategories());
  }, []);

  const handelOnClick = () => {
    dispatch(ToggleCategories());
  };

  const handelOnClickCategories = (item) => {
    console.log(item);
    dispatch(fetchCategoriesSearch(item));
    dispatch(ToggleCategories());
  };

  const handelOnClickHome = () => {
    dispatch(fetchedCategories());
  };

  const handelOnClickHindi = () => {
    dispatch(fetchHindiJokesApi());
  };

  return (
    <div className=" flex flex-col gap-6 ss:gap-0  xs:flex-row  justify-between items-center p-3 xs:px-5 sm:px-10 md:px-14 border-none backdrop-blur-[2px]">
      {/* logo */}
      <div className="w-[75px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ACAfMCEZ4K8MXyuxXldlavkTJPi1Tykp0g&usqp=CAU"
          className="w-full rounded-[100%]"
          alt="jokes logo"
        />
      </div>

      {/* navlinks */}
      <div className="w-[100%] xs:w-fit">
        <ul className="flex flex-col xs:flex-row gap-5 text-lg font-semibold items-center   ">
          <Link to={"/"} className="w-[100%] xs:w-fit ">
            <li className="cursor-pointer w-[100%] xs:w-fit  ">
              <button
                className="w-[100%] xs:w-fit rounded-2xl px-3 py-2 text-white font-bold shadow-lg outline-none shadow-green-800 bg-green-500 active:scale-95 duration-500 ease-in-out "
                onClick={handelOnClickHome}
              >
                Home
              </button>
            </li>
          </Link>

          <li className=" relative w-[100%] xs:w-fit  ">
            <button
              className="rounded-2xl  bg-green-500 px-7 py-2 w-[100%] text-white font-bold shadow-lg outline-none shadow-green-800 xs:w-fit active:scale-95 duration-500 ease-in-out  "
              onClick={handelOnClick}
            >
              categories <IoMdArrowDropdown className="inline-block text-2xl" />
            </button>
            {/* dropdownlist */}
            {categoriesToggle && (
              <div className="absolute overflow-y-scroll  h-[190px]  w-full backdrop-blur-3xl  rounded-2xl mt-1 ">
                <ul className="flex   flex-col gap-3 items-center justify-center px-2 bg-[#F0F0F0] py-4">
                  {categories.map((item, index) => (
                    <Link to={`/Categories/${item}`} key={index}>
                      <li
                        className=" text-xl w-full xs:w-fit  px-7 rounded-2xl py-1 text-center bg-green-500 cursor-pointer text-white font-semibold"
                        onClick={() => handelOnClickCategories(item)}
                      >
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <Link to={"/Hindi"} className="w-[100%] xs:w-fit ">
            <li className="w-[100%] xs:w-fit">
              <button
                className="w-[100%] xs:w-fit px-4 py-2 rounded-2xl text-white font-bold shadow-lg outline-none shadow-green-800  bg-green-500 active:scale-95 duration-500 ease-in-out "
                onClick={handelOnClickHindi}
              >
                Hindi
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
