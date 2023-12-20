import React from "react";
import { images } from "../../../constants";

const Banner = () => {
  return (
    <div>
      <img
        className="w-full h-[540px] object-cover"
        src={images.Banner}
        alt="users are reading articles"
      />
    </div>
  );
};

export default Banner;
