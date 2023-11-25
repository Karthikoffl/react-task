import React, { useState, useEffect } from "react";
import Hero from "../assets/hero.png";
import Category1 from "../assets/category-1.png";
import Category2 from "../assets/category-2.png";
import Category3 from "../assets/category-3.png";
import axios from "axios";
import Product from "../components/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  const FetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  //   console.log(products);
  useEffect(() => {
    FetchProduct();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    navigator: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <img className="h-[40%] w-[100%]" src={Hero} alt="Hero-img" />
      <div className="flex flex-col md:flex-row items-center justify-around ml-5 mr-5 mt-10 mb-10">
        <img
          src={Category1}
          alt="Category"
          className="h-[300px] w-[430px] md:h-[310px] md:w-[440px] hover:duration-1000 cursor-pointer mb-5 md:mb-0"
        />
        <img
          src={Category2}
          alt="Category"
          className="h-[300px] w-[430px] md:h-[310px] md:w-[440px] hover:duration-1000 cursor-pointer mb-5 md:mb-0"
        />
        <img
          src={Category3}
          alt="Category"
          className="h-[300px] w-[430px] md:h-[310px] md:w-[440px] hover:duration-1000 cursor-pointer mb-5 md:mb-0"
        />
      </div>
      <div className="pl-4 pr-4 md:pl-20 md:pr-20 mt-5 mb-10 text-center justify-center">
        <h2 className="text-[#E87F8E]">Best Products</h2>
        <h1 className="text-3xl uppercase font-semibold mt-5 mb-10">
          Best sellers products
        </h1>
        <Slider {...sliderSettings}>
          {Array.isArray(products) &&
            products.map((item) => (
              <div key={item.id} className="items-center justify-center flex">
                <button
                  className="flex items-center justify-center"
                  onClick={() => console.log(item)}
                >
                  <Product
                    _id={item.id}
                    img={item.images[0]}
                    productName={item.title}
                    price={item.price}
                  />
                </button>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
