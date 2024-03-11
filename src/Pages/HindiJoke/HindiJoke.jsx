import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchBanner from "../../assets/laughing.png";
import { fetchHindiJokesApi } from "../../Store/hindiJokesSlice";
import haha from "../../assets/haha.gif";

function HindiJoke() {
  const data = useSelector((state) => state.hindiJokes.jokeStore.data);
  const loding = useSelector((state) => state.hindiJokes.loding);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(fetchHindiJokesApi());
  }, []);

  const handelOnClick = () => {
    dispatch(fetchHindiJokesApi());
  };

  if (loding) {
    return (
      <div
        className="w-full h-[68vh] py-5"
        style={{
          backgroundImage: `url(${searchBanner})`,
        }}
      >
        <div className="flex flex-col justify-center items-center rounded-2xl">
          <img src={haha} alt="" className="rounded-2xl w-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className=" h-[68vh]  justify-center w-[100%] px-5 flex items-center  "
      style={{
        backgroundImage: `url(${searchBanner})`,
      }}
    >
      <div className="   backdrop-blur-3xl ">
        {data.map((item) => (
          <div
            className=" backdrop-blur-md text-center border border-green-700 px-3 bg-[#F0F0F0] shadow-sm shadow-black py-5 rounded-xl "
            key={item._id}
          >
            <h1 className="font-bold text-3xl mb-10">{item.jokeContent}</h1>
            <button
              className="px-7 py-3 text-2xl bg-green-700 text-white rounded-2xl"
              onClick={handelOnClick}
            >
              Random
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HindiJoke;
