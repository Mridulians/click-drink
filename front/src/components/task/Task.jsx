// import React from 'react'
import "./Task.css";
import Friends from "../../assets/shareWithFriends.png";
import Twiiter from "../../assets/TwitterDrink.png";
import Insta from "../../assets/InstagramDrink.png";
import LinkedIn from "../../assets/LinkedinDrink.png";
import Plus from "../../assets/PlusDrink.png";

const Task = () => {
  return (
    <div className="flex flex-col gap-[10px] mt-[4rem]">
      <div className="tasks w-[90%] md:w-[40%] m-auto h-[100px] py-[24px] px-[32px] rounded-[8px] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[10px]">
          <img src={Friends} alt="" className="w-[40px] h-[40px]" />

          <div>
            <p className="text-[20px] text-[#FEEFE6] leading-[24px]">
              Share with friends
            </p>
            <p className="text-[16px] leading-[24px] text-[#FCF0E9] opacity-[0.6]">
              +8000 CD&apos;s
            </p>
          </div>
        </div>

        <img src={Plus} alt="" className="w-[32px] h-[32px]" />
      </div>

      <div className="tasks w-[90%] md:w-[40%] m-auto h-[100px] py-[24px] px-[32px] rounded-[8px] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[10px]">
          <img src={Twiiter} alt="" className="w-[40px] h-[40px]" />

          <div>
            <p className="text-[20px] text-[#FEEFE6] leading-[24px]">
              Follow ClickDrink on twitter.
            </p>
            <p className="text-[16px] leading-[24px] text-[#FCF0E9] opacity-[0.6]">
              +5000 CD&apos;s
            </p>
          </div>
        </div>

        <img src={Plus} alt="" className="w-[32px] h-[32px]" />
      </div>

      <div className="tasks w-[90%] md:w-[40%] m-auto h-[100px] py-[24px] px-[32px] rounded-[8px] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[10px]">
          <img src={Insta} alt="" className="w-[40px] h-[40px]" />

          <div>
            <p className="text-[20px] text-[#FEEFE6] leading-[24px]">
              Follow ClickDrink on Instagram.
            </p>
            <p className="text-[16px] leading-[24px] text-[#FCF0E9] opacity-[0.6]">
              +4000 CD&apos;s
            </p>
          </div>
        </div>

        <img src={Plus} alt="" className="w-[32px] h-[32px]" />
      </div>

      <div className="tasks w-[90%] md:w-[40%] m-auto h-[100px] py-[24px] px-[32px] rounded-[8px] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[10px]">
          <img src={LinkedIn} alt="" className="w-[40px] h-[40px]" />

          <div>
            <p className="text-[20px] text-[#FEEFE6] leading-[24px]">
              Follow ClickDrink on LinkedIn.
            </p>
            <p className="text-[16px] leading-[24px] text-[#FCF0E9] opacity-[0.6]">
              +4000 CD&apos;s
            </p>
          </div>
        </div>

        <img src={Plus} alt="" className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};

export default Task;
