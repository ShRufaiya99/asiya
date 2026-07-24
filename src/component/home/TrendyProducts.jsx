import React, { useEffect, useState } from "react";
import Tittle from "../common/Tittle";
import trendyData from "../../api/trendyData.json";
import Product from "../common/Product";
import axios from "axios";
const TrendyProducts = () => {
  let [activeCatagory, setActiveCatagory] = useState("all");
  let [products, setProducts] = useState([]);
  let [filterProduct, setFilterProduct] = useState([]);
  const handleTabs = (catagory) => {
    setActiveCatagory(catagory);
    let filterProducts = products.filter((item) => item.catagory == catagory);
    setFilterProduct(filterProducts);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        throw new Error("Somthing went wrong");
      });
  });
  return (
    <section className="mt-23.5">
      <div className="container">
        <Tittle name="OUR TRENDY" namebold="PRODUCTS" />
        <ul className="mt-7.5 mb-10 flex justify-center gap-13.5">
          {trendyData.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleTabs(item.name)}
                className={`${item.name == activeCatagory ? "text-primary" : "text-gray"} text-base font-medium uppercase`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-4">
          {filterProduct.length > 0
            ? filterProduct.map((item) =>( 
            <Product item={item} key={item.id} />
          ))
            : products.map((item) => <Product item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
};

export default TrendyProducts;
