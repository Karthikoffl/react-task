import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Cosmetic", link: "/" },
    { name: "Lenses", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Contacts", link: "/" },
  ];

  return (
    <div className="flex flex-row md:flex-row justify-between p-4 md:p-5 shadow-md sticky top-0 bg-white items-center">
      <div className="flex items-center gap-2 md:gap-10">
        <img
          src={Logo}
          alt="Fancy Look"
          className="w-auto h-auto md:w-auto md:h-auto"
        />
      </div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <div className="w-6 h-px bg-black"></div>
        <div className="w-6 h-px bg-black mt-1"></div>
        <div className="w-6 h-px bg-black mt-1"></div>
      </div>
      {/* Desktop Menu */}
      <ul
        className={`flex flex-row md:flex-row items-center list-none gap-2 md:gap-8 text-sm font-semibold text-black uppercase ${
          isMobileMenuOpen ? "hidden md:flex" : "flex md:hidden"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setMenu(item.name)}
            className="flex items-center justify-center gap-1 md:gap-3 cursor-pointer"
          >
            <Link to={item.link}>{item.name}</Link>
            {menu === item.name ? (
              <hr className="border-none w-full md:w-[100%] h-1 md:h-[3px] rounded-md bg-black" />
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      <div
        className={`items-center flex ${isMobileMenuOpen ? "flex" : "hidden"}`}
      >
        <ul className="flex flex-row items-center gap-2 md:gap-8">
          <li>
            <GoHeart className="text-2xl cursor-pointer" />
          </li>
          <li>
            <Link to="/cart">
              <IoBagHandleOutline className="text-2xl cursor-pointer" />
              <div className="w-4 h-4 md:w-[16px] md:h-[16px] flex justify-center items-center mt-[-5px] ml-[-2px] md:ml-[-5px] rounded-2xl absolute bg-[#EA8291] text-[8px] md:text-[12px] text-center text-white p-1 md:p-2">
                {cartItems.length}
              </div>
            </Link>
          </li>
          <li>
            <CiSearch className="text-2xl cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
}
