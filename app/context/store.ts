import { proxy } from "valtio";
import type { Cart, CartItem } from "../interfaces/interfaces";

const initialState: CartItem[] = [];


const cartState = proxy({
    cart: initialState,
    count: initialState.length
});

export default cartState;
