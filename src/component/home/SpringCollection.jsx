import React from "react";
import SpringVdo from "../../assets/images/sspring.mp4";
import Video from "../common/Video";
import Countdown from "react-countdown";

const SpringCollection = () => {

  // Renderer callback with condition
  const renderer = ({ days,hours, minutes, seconds }) => {
    return (
      <div className="text-primary mt-[119.69px] flex gap-6.25 text-[30px] leading-7.5 font-normal">
        <div>
          <h2>{days}</h2>
          <h3 className="text-gray text-base font-bold">DAYS</h3>
        </div>
        <div>:</div>
        <div>
          <h2>{hours}</h2>
          <h3 className="text-gray text-base font-bold">HOURS</h3>
        </div>
        <div>:</div>
        <div>
          <h2>{minutes}</h2>
          <h3 className="text-gray text-base font-bold">MINS</h3>
        </div>
        <div>:</div>
        <div>
          <h2>{seconds}</h2>
          <h3 className="text-gray text-base font-bold">SEC</h3>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-lightgray py-7">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-red after:content[''] after:bg-red relative ml-15 text-sm leading-6 font-medium after:absolute after:top-2.5 after:-left-15 after:h-0.5 after:w-10">
              DEAL OF THE WEEK
            </h3>
            <h2 className="text-primary mt-2.25 mb-2.75 text-[70px] font-normal uppercase">
              <span className="font-bold">Spring</span> Collection
            </h2>
            <button className="text-primary after:content[''] after:bg-primary relative cursor-pointer text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-500 hover:after:w-full">
              SHOP NOW
            </button>
            <Countdown date={"2026-07-31T23:59:59+00:00"} renderer={renderer} />
          </div>
          <div className="h-135.75 w-130.5">
            <Video className="h-full w-full" src={SpringVdo} alt="springvdo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringCollection;
