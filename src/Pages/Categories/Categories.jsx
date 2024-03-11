import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesSearch } from "../../Store/categoriesSearchSlice";

import searchBanner from "../../assets/laughing.png";

function Categories() {
  const data = useSelector(
    (state) => state.categoriesSearch.categoriesSearchData
  );
  console.log(data);
  const loding = useSelector((store) => store.categoriesSearch.loding);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesSearch());
  }, []);

  if (loding) {
    return (
      <div
        className="w-full h-screen  py-5"
        style={{
          backgroundImage: `url(${searchBanner})`,
        }}
      ></div>
    );
  }
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full py-5 text-[#F0F0F0] px-5 font-semibold text-2xl rounded-2xl bg-green-700 "
          >
            <h1>{item.value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
