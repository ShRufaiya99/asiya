import React, { useEffect, useState } from "react";
import Tittle from "../common/Tittle";
import logoData from '../../api/logoData.json'
import Image from "../common/Image";
import axios from "axios";
import Product from "../common/Product";

const UomoLogoImgs = () => {
  return (
    <section className="mt-20.75">
      <div className="container">
        <Tittle name="@UOMO" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">

            {logoData.map((item)=>(
                  <div key={item.id}>
                  <Image         
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                  />
                  </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default UomoLogoImgs;
