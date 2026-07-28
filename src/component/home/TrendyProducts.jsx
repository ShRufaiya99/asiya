import React, { useEffect, useState } from "react";
import Tittle from "../common/Tittle";
import trendyData from "../../api/trendyData.json";
import Product from "../common/Product";
import axios from "axios";
const TrendyProducts = () => {
  let [activeCatagory, setActiveCatagory] = useState("all");
  let [products, setProducts] = useState([]);
  let [filterProduct, setFilterProduct] = useState([]);
  let [showAllProducts , setShowAllProducts] = useState(false)

  const handleTabs = (category) => {
    setActiveCatagory(category);
    let filterProducts = products.filter((item)=> item.category == category)
    setFilterProduct(filterProducts)
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

  const handleShowAllProducts = () =>{
    setShowAllProducts(!showAllProducts)
  }
  return (
    <section className="mt-23.5 mb-25">
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
        <div className="grid grid-cols-4 gap-6">
          {filterProduct.length > 0
          ? filterProduct.map((item) =>( <Product item={item} key={item.id} />))
          : showAllProducts ? products
          .map((item) => <Product item={item} key={item.id} />)
          :products
          .slice(0,8)
          .map((item) => <Product item={item} key={item.id} />)
          }
        </div>
        <div className="text-center mt-10.5"> 
          <button onClick={handleShowAllProducts} className=" text-primary after:content[''] after:bg-primary relative text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-500 hover:after:w-full cursor-pointer">
            <h3>
              {showAllProducts ? "SEE LESS PRODUCT" : "SEE ALL PRODUCT"}
              </h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendyProducts;
