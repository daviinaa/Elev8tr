import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        {/* Outer Container */}
        <div className="relative min-h-screen flex items-center justify-center">
          {/* Responsive inner box */}
          <div
            className="
      absolute flex flex-col gap-4 items-center backdrop-blur-lg bottom-[10%] border border-[rgba(255,255,255,0.3)] right-0
      p-6 md:p-10 mr-4 md:mr-[6%] rounded-[24px]
      w-[90%] sm:w-[70%] md:w-[51%] max-w-xl
      "
          >
            <p className="font-bold text-2xl md:text-4xl text-center">
              Hi, Welcome to Elev8tr
            </p>
            <h1 className="text-base md:text-xl text-center">
              Your future starts here. Making the right career choice is one of
              the most important decisions you’ll make. Join the network of
              1,300,000+ members and let us do the hard work for you. Take your
              first step to a brighter future.
            </h1>
            <div className="flex gap-2 flex-wrap justify-center">
              <Link
                className="rounded bg-[#5F9EA0] px-4 py-2 text-white text-sm"
                to={"/signup"}
              >
                Signup
              </Link>
              <Link
                className="rounded bg-[#5F9EA0] px-4 py-2 text-white text-sm"
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
