import React from 'react';

interface AddToCartButtonProps {
  handleClick: () => void
}

const AddToCartButton = ({handleClick}:AddToCartButtonProps) => {
  return (
    <button className="border-2 border-black px-4 py-2 transition duration-200 ease-in-out hover:bg-black hover:text-white max-w-[200px] font-semibold" onClick={handleClick}>ADD TO CART</button>
  );
}

export default AddToCartButton;
