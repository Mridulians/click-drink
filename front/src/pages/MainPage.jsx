// import React from 'react'
import DollarCoin from "../assets/DollorIcon.png";
import Logo from "../assets/ClickDrinkLogo.png";
import Ellipse from "../assets/Ellipse.png";
import "./MainPage.css";
import Task from "../components/task/Task";
import { useState } from "react";

const MainPage = () => {
  // Constants
  const CLICKS_PER_DOLLAR = 4800;

  const [count, setCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [dollars, setDollars] = useState(0);


  const countIncrement = () => {
    setCount(count + 1);
    triggerShake();

    // Update dollars every 4800 clicks
    if ((count + 1) % CLICKS_PER_DOLLAR === 0) {
      setDollars(dollars + 1);
    }
  };


  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 300); // Match the duration of the shake animation
  };

  return (
    <div
      className={`bg-Img w-full h-full py-[4rem] ${isShaking ? "shake" : ""}`}
    >
      <div className="flex flex-row justify-start gap-[10px] items-center bg-gradient-to-r from-customStart to-customEnd w-[90%] md:w-[40%] m-auto rounded-[24px] py-[24px] px-[48px]">
        <h2 className="text-[#FFFFFF] text-[48px] font-bold leading-[52px]">
          {dollars}$
        </h2>
        <img src={DollarCoin} alt="" className="w-[40px] h-[40px]" />
      </div>

      <div className="text-white text-[32px] leading-[35px] font-bold w-fit mx-auto mt-[4rem]">
        {count}
      </div>

      <div className="relative w-fit mx-auto mt-[2rem]">
        <img
          src={Logo}
          alt=""
          className="w-[184px] h-[184px]"
          onClick={countIncrement}
        />
        <img
          src={Ellipse}
          alt=""
          className="w-[200px] h-[57px] absolute top-[150px]"
        />
      </div>

      <Task />
    </div>
  );
};

export default MainPage;
