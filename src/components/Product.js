import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../context/actions/cartActions";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-md p-5 m-5 md:p-10 md:m-10">
      <img
        src={props.img}
        alt="productimg"
        className="h-[250px] w-[250px] object-contain"
      />
      <h2 className="mt-3 sm:mt-5 text-center">{props.productName}</h2>
      <div className="flex flex-col items-center justify-center mt-3 sm:mt-5">
        <button
          onClick={() => dispatch(addToCart(props))}
          className="p-2 border-2 border-black text-black font-semibold uppercase mb-2 sm:mb-0"
        >
          Add To Cart
        </button>
        <h2 className="text-center">Price: ${props.price}</h2>
      </div>
    </div>
  );
};

export default Product;
