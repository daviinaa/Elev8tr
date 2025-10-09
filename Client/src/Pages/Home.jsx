import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <div className="">
          <div className="absolute flex flex-col gap-4 items-center backdrop-blur-lg bottom-[10%] border border-[rgba(255,255,255,0.3)] right-0 p-10 mr-[6%] rounded-[24px] w-[51%] ">
            <p className="font-bold text-[3rem]">Hi, Welcome to Elev8tr</p>
            <h1 className=" text-[1rem]">
              Your future starts here. Making the right career choice is one of
              the most important decisions you’ll make. Join the network of
              1,300,000+ members and let us do the hard work for you. Take your
              first step to a brighter future.
            </h1>
            <div className="flex gap-2">
              <Link
                className="rounded bg-[#5F9EA0] items-center px-4 py-2 text-white text-sm"
                to={"/signup"}
              >
                Signup
              </Link>
              <Link
                className="rounded bg-[#5F9EA0] items-center px-4 py-2 text-white text-sm"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
