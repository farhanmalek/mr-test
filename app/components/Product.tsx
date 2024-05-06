"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "../interfaces/interfaces";
import SizeButton from "./ProductUtils/SizeButton";
import AddToCartButton from "./ProductUtils/AddToCartButton";

const Product = () => {
    const [item, setItem] = useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState<number | null>(null); // State to store the ID of the selected size
    const [size, setSize ] = useState<String | null>(null);

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
        setSelectedSize(sizeId);
        const chosenSize = item?.sizeOptions.find(option => option.id === sizeId);
        setSize(chosenSize?.label ?? null);
    };

    useEffect(()=> {
        getProduct();
    },[])

    return (
        <div className="flex flex-col p-6 gap-4">
            {item && (
                <>
                    <img src={item.imageURL} alt="product-image"className="self-center w-[100%]" />
                    <div className="font-semibold text-xl">{item.title}</div>
                    <div className="font-semibold">${item.price}.00</div>
                    <div className="text-[#888888]">{item.description}</div>
                    <div><span className="text-[#888888]">Size</span>
                        <span className="text-[#C90000]">*</span>
                        :{' '}
                        <span className="font-semibold">{size}</span>
                        </div>
                    <div className="flex gap-2">
                        {item.sizeOptions.map(option => (
                            <button
                                
                                key={option.id}
                                className={`border ${selectedSize === option.id ? 'border-black border-2 font-semibold' : 'border-[#CCCCCC]'}`}
                                onClick={() => handleSizeClick(option.id)}
                            >
                                <SizeButton size={option.label} />
                            </button>
                        ))}
                    </div>
                    <AddToCartButton/>
                </>
            )}
        </div>
    );
};

export default Product;

