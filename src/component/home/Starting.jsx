import React from "react";
import Image from "../common/Image";
import startingData from "../../api/startingData.json";
const Starting = () => {
  return (
    <section className="mt-25 mb-22.75">
      <div className="container">
        <div className="flex justify-between">
          {startingData.map((item) => (
            <div key={item.id} className="relative h-99.5 w-172.5 overflow-hidden  group hover:bg-red cursor-pointer">
              <Image
                className=" absolute h-full w-full object-cover object-[center_15%] inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                src={item.image}
                alt={item.title}
              />
             <div className="">
             <Image
                className=" absolute right-2 h-144.25 w-108.25  object-cover object-[center_15%] inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={item.hoverImage}
                alt={item.title}
              />
             </div>
             <div className=" h-full w-full">
             <div className="absolute bottom-0 pb-12.75 pl-12.75">
                <h3 className="text-[18px] font-medium text-primary group-hover:text-white mb-2">{item.price}</h3>
                <h2 className="text-[26px] font-medium text-black group-hover:text-white mb-3.75">{item.title}</h2>
                <button className="text-primary after:content[''] after:bg-primary relative group-hover:text-white group-hover:after:bg-white cursor-pointer text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-500 hover:after:w-full">
                  SHOP NOW
                </button>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Starting;

//group — parent-এ hover হলে ভেতরের child (overlay)-কে react করানোর জন্য Tailwind-এর group system ব্যবহার
// absolute inset-0 — overlay div-টা পুরো image-এর উপর ঠিক same size/position-এ বসবে
// bg-red-600/60 — red color, 60% opacity (তুমি চাইলে /40, /70 ইত্যাদি দিয়ে intensity বদলাতে পারো)
// opacity-0 group-hover:opacity-100 — normal অবস্থায় overlay অদৃশ্য থাকবে, mouse hover করলে ধীরে ধীরে দেখা যাবে
// transition-opacity duration-500 — smooth fade effect (হঠাৎ না এসে animate করে আসবে)
// z-10 (text-এ) — text overlay-এর উপরে থাকবে যাতে ঢাকা না পড়ে

// Opacity নিয়ে fine-tune করতে চাইলে
// হালকা tint চাইলে: bg-red-600/30
// গাঢ় tint চাইলে: bg-red-600/70

// object-right — ছবির ডান দিক visible রাখবে (বাম দিক থেকে বেশি crop হবে)
// object-left — বাম দিক visible রাখবে
// object-center — মাঝখান (default)
// object-[80%_center] — custom percentage (fine-tune করতে চাইলে, যেমন ৮০% ডান দিকে ঝুঁকিয়ে)