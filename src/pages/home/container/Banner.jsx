import React from "react";
import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

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
          <div className="p-[10px]">
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

          <div className="flex flex-col md:flex-row gap-2.5 p-1 font-normal text-[#959EAD] text-xs lg:text-sm">
            <div className="w-full relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6" />
              <input
                className="w-full rounded-sm pl-12 pr-3 py-2 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                type="text"
                placeholder="Từ khóa tìm kiếm"
              />
            </div>

            <button className="w-full md:w-fit whitespace-nowrap bg-[#dca447] text-white rounded-lg md:rounded-sm px-5 py-3 md:py-0">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
