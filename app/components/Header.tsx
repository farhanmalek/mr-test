"use client";
import {useState} from "react";
import { useSnapshot } from "valtio";
import cartState from "../context/store";
import CartCard from "./HeaderUtils/CartCard";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const snap = useSnapshot(cartState);
  const [isOpen,setIsOpen] = useState<boolean>(false);


  return (
    <div className="bg-[#F6F6F7] py-3 mt-4 flex justify-end sm:w-[80%] mb-2">
      <div className="relative">
        <div role="button" className={`flex gap-2 mr-2 text-[#888888] md:mr-[100px] ${isOpen ? 'bg-white border border-[#2222222] border-b-0' : ''}`} onClick={() => {setIsOpen(!isOpen)}}>
          <FaShoppingCart className="self-center md:hidden"/>
          <p className="hidden md:block">My Cart</p>
          <p>({snap.count})</p>
        </div>
        {
          isOpen &&  
          <>
           <div className="after:absolute after:md:w-[90px] after:top-[23px] after:left-[1px] after:bg-white after:h-[10px] after:z-[999]"></div>
          
          <ul
    
          className=" absolute right-[8px] md:right-[100px] w-[300px] bg-white border border-[#222222

          ]"
        >
          { snap.cart.length === 0 ? <p className="flex justify-center items-center text-[#888888]">Add Items to Cart</p> :
          
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
          </>
        }
      
      </div>
    </div>
  );
};

export default Header;
