export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: SizeOption[];
  }
  export interface SizeOption {
    id: number;
    label: string;
  }
  

export interface CartItem {
  id: number;
  title: string
  price: number;
  imageURL: string;
  size: string
  quantity: number
}

export interface Cart {
  items: CartItem[]
}

