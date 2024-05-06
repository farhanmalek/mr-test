import { CartItem } from "@/app/interfaces/interfaces"


const CartCard = ({title,imageURL,price,size,quantity}:CartItem) => {
  return (
    <div className="flex gap-2">
        <img src={imageURL} alt="product-image" className="w-[100px]"/>
        <div className="flex flex-col gap-2">
            <p>{title}</p>
            <p>{quantity} x <span className="font-semibold">${price}.00</span></p>
            <p>Size: {size}</p>
        </div>
    </div>
  )
}

export default CartCard