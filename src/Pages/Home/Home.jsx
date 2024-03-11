import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomEnglishJokes } from "../../Store/randomEnglishJokeSlice";
import gif1 from "../../assets/bggif1.gif";
import laughing from "../../assets/laughing.png";

function Home() {
  const data = useSelector((item) => item.randomEnglishJoke.randomJoke);
  const loding = useSelector((item) => item.randomEnglishJoke.loding);
  console.log(data);
  console.log(loding);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomEnglishJokes());
  }, []);

  const handelOnClick = () => {
    dispatch(fetchRandomEnglishJokes());
  };

  if (loding) {
    return (
      <div
        className="w-full h-[68vh] py-5 bg-center"
        style={{
          backgroundImage: `url(${gif1})`,
        }}
      >
        <div className="flex justify-center rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div
      className=" h-[68vh]  justify-center w-[100%] px-5 flex items-center  "
      style={{
        backgroundImage: `url(${laughing})`,
      }}
    >
      <div className="   backdrop-blur-3xl ">
        <div className=" backdrop-blur-md text-center border border-green-700 px-3 bg-[#F0F0F0] shadow-sm shadow-black py-5 rounded-xl ">
          <h1 className="font-bold text-3xl mb-10">{data.value}</h1>
          <button
            className="px-7 py-3 text-2xl bg-green-700 text-white rounded-2xl"
            onClick={handelOnClick}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
