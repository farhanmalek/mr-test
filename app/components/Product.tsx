"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { CartItem, type Product } from "../interfaces/interfaces";
import SizeButton from "./ProductUtils/SizeButton";
import AddToCartButton from "./ProductUtils/AddToCartButton";
import cartState from "../context/store";

const Product = () => {
    const [item, setItem] = useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState<number | null>(null); 
    const [size, setSize ] = useState<string | null>(null);
    const [itemToAdd, setItemToAdd] = useState<CartItem | null>(null);
    const [error,setError] = useState<string | null>(null);

    const url = "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product";

    async function getProduct() {
        try {
            const response = await axios.get(url);
            const returnedItem: Product = response.data;
            setItem(returnedItem);
        } catch (error: any) {
            console.error(error);
        }
    }

    const handleSizeClick = (sizeId: number) => {
        setError(null)
        setSelectedSize(sizeId);
        const chosenSize = item?.sizeOptions.find(option => option.id === sizeId);
        setSize(chosenSize?.label ?? null);
    };

    useEffect(()=> {
        getProduct();
    },[])

    const handleAddToCart = () => {
        if (item && size) {
            const existingItemIndex = cartState.cart.findIndex(
                cartItem => cartItem.size === size
            );
    
            if (existingItemIndex !== -1) {
    
                cartState.cart[existingItemIndex].quantity++;
            } else {
                const newItemToAdd: CartItem = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    imageURL: item.imageURL,
                    size: size,
                    quantity: 1
                };
                cartState.cart.push(newItemToAdd);
            }
    
            cartState.count++;
        } else {
            setError("Please select a size.")
        }
    };
    
    

    return (
        <div className="flex flex-col p-6 gap-4 md:flex md:flex-row sm:w-[70%] sm:gap-8">
            {item && (
                <>
                    <img src={item.imageURL} alt="product-image"className="self-center w-[350px] sm:max-w-[300px]" />

                    <div className="flex flex-col gap-4">
                    <div className="font-semibold text-xl">{item.title}</div>
                    <div className="font-semibold">${item.price}.00</div>
                    <div className="text-[#888888] text-sm">{item.description}</div>
                    <div><span className="text-[#888888]">Size</span>
                        <span className="text-[#C90000]">*</span>
                        :{' '}
                        <span className="font-semibold">{size}</span>
                        </div>
                    <div className="flex gap-2">
                        {item.sizeOptions.map(option => (
                            <button
                                
                                key={option.id}
                                className={`border ${selectedSize === option.id ? 'border-black border-2 font-semibold' : 'border-[#CCCCCC] text-[#888888]'}`}
                                onClick={() => handleSizeClick(option.id)}
                            >
                                <SizeButton size={option.label} />
                            </button>
                        ))}
                    </div>
                    <AddToCartButton handleClick = {handleAddToCart}/>
                    {
                        error && <p className="text-[#C90000]">{error}</p>
                    }

                    </div>
                
                </>
            )}
        </div>
    );
};

export default Product;

