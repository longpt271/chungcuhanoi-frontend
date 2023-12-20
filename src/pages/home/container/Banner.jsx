import React from "react";
import { images } from "../../../constants";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[540px] object-cover"
        src={images.Banner}
        alt="users are reading articles"
      />
      <div className="container p-5 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="w-full lg:w-3/4 p-[10px] bg-[#2a292991] rounded-md text-white text-center">
          <h2 className="font-ebgaramond text-xl lg:text-2xl leading-7 font-bold">
            NƠI HẠNH PHÚC NGẬP TRÀN
          </h2>

          <div className="bg-[#fab702] w-[80px]  h-[3px] my-[3px] mx-auto">
            &nbsp;
          </div>

          <div className="text-xs lg:text-sm">
            Hạnh phúc là có người đồng hành gửi trao tin cậy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
