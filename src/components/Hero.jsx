import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
          <h1 className="text-5xl lg:text-5xl md:text-3xl sm:text-2xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            {title}
          </h1>
          <h1 className="text-5xl mt-2 lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            {subtitle}
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5"
          >
            {btntext}
          </button>

          {/* ====================================== */}
          {/* <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
            {videos?.map((val, i) => (
              <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
            ))}
          </div> */}
          {/* ====================================== */}

          {/* ====================================== */}
          {/* <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
            {sociallinks?.map((val, i) => (
              <SocialLink key={i} icon={val.icon} />
            ))}
          </div> */}
          {/* ====================================== */}
        </div>
        <div className="flex items-center">
          <img
            src={img}
            className="w-auto h-[42vh] lg:h-[32vh] md:h-[28vh] sm:h-[20vh] xsm:h-[19vh] transitions-theme -rotate-[20deg] hover:rotate-0 cursor-pointer object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
