import { Product } from "../all";

export default function useProductLink(Producto:Product){
    return `products/${Producto.nombre}`;
}