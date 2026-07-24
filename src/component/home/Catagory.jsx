import React from "react";
import catagoryData from "../../api/catagoryData.json";
import Image from "../common/Image";
import { Link } from "react-router";
const Catagory = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <div className="grid grid-cols-4 gap-7.5">
          {catagoryData.map((item) => (
            <div key={item.id}
              className={`${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"} relative h-full w-full`}
            >
              <Image src={item.image} alt={item.name} />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-primary text-[14px] leading-6 font-normal">
                  HOT LIST
                </h3>
                <h2 className="text-primary text-[26px] font-medium">
                  <span className="font-bold"> {item.name} </span>
                  {item.id == 4 ? "CARDS" : "COLLECTION"}
                </h2>
                <p className="text-primary text-[14px] leading-6 font-normal">Surprise someone with the gift they <br/> really want.</p>
                <Link className="text-primary after:content-[] after:bg-primary relative text-[14px] leading-6 font-normal after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12.5">
                  {item.id == 4 ? "DISCOVER MORE" : "SHOP NOW"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catagory;
