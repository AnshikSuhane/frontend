export interface Product {
    id:number;
    name:string;
    description:string;
    price:number;
    image:string;
    category:"women"|"men"|"unisex" |"limited";
    rating:number;
}