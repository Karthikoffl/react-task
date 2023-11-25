import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../context/actions/cartActions";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-semibold mb-5">Your Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center border-b border-gray-300 py-3"
        >
          <img
            src={item.img}
            alt={item.productName}
            className="w-16 h-16 object-cover mr-4"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{item.productName}</h2>
            <p>Price: ${item.price}</p>
            <div className="flex items-center">
              <button
                onClick={() => dispatch(decrementItem(item))}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
              >
                -
              </button>
              <span className="text-xl">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementItem(item))}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full ml-2"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <h2 className="text-2xl font-semibold">Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}
