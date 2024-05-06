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
  