import { useEffect, useState } from "react";
import { Product } from "../all";

const baseDatos: Array<Product> = [
  {
    id: 0,
    nombre: "camiza de fuerza",
    cantidad: 20,
    descripcion:
      "es una camiza de fuerza la cual es muy atractiva especialmente a esas personas que creen en la tierra plana",
    precio: 20000,
  },
  {
    id: 1,
    nombre: "Puti camiza",
    cantidad: 20,
    descripcion: "es una camiza la cual demuestra lo que quieras ser",
    precio: 40000,
  },
  {
    id: 3,
    nombre: "Calzon chino",
    cantidad: 10,
    descripcion: "es un calzo directamente traido desde la misma china",
    precio: 400000,
  },
];

export default function useProduct({ productName, productId }: any) {
  const [getProduct, setProduct] = useState(productId);
  const [getResult, setResult] = useState(baseDatos[0]);
  useEffect(() => {
    /*aca se estaria ejecutando el fect*/
    let resultado: Product;
    if (baseDatos.length <= getProduct) {
      resultado = {
        id: -1,
        nombre: "sin identificar",
        precio: 0,
        cantidad: 0,
        descripcion: "",
      };
    } else resultado = baseDatos[getProduct];
    setResult(resultado);
  }, [getProduct]);
  return {
    getProduct: getResult,
    setProduct,
  };
}
