"use client";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import cartState from "../context/store";
import CartCard from "./HeaderUtils/CartCard";

const Header = () => {
  const snap = useSnapshot(cartState);

  //use key value pairs to determine dupes in array
  useEffect(()=> {
    console.log(cartState.cart)
  },[snap.count])

  return (
    <div className="bg-[#F6F6F7] py-2 mt-4 flex justify-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex gap-2 pr-2">
          <p>My Cart</p>
          <p>({snap.count})</p>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu w-[350px] overflow-y-auto mr-2 bg-white border border-red"
        >
          {snap.cart.map((product) => (
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
