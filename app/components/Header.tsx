"use client";
import React from "react";
import { useSnapshot } from "valtio";
import cartState from "../context/store";
import CartCard from "./HeaderUtils/CartCard";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const snap = useSnapshot(cartState);

  return (
    <div className="bg-[#F6F6F7] py-2 mt-4 flex justify-end sm:w-[80%]">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex gap-2 pr-2 text-[#888888] md:pr-[100px]">
          <FaShoppingCart className="self-center md:hidden"/>
          <p className="hidden md:block">My Cart</p>
          <p>({snap.count})</p>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu w-[320px]  mr-2 bg-white border border-red"
        >
          { snap.cart.length === 0 ? <p className="flex justify-center items-center">Add Items to Cart</p> :
          
          snap.cart.map((product) => (
            <li key={product.id} className="flex flex-col p-1 gap-3">
              <CartCard
                id={0}
                quantity={product.quantity}
                title={product.title}
                price={product.price}
                imageURL={product.imageURL}
                size={product.size}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
