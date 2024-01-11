import { useEffect, useState } from "react";
import { Image, Product, TypeImage, User } from "../all";

interface Promp {
  usuarioId?: number;
  productoId?: number;
}

interface ExtraPromp extends Promp{
  tipo:number;
}

const tiposImagenes: Array<TypeImage> = [
  {
    id: 0,
    tipo: "principal",
  },
  {
    id: 1,
    tipo: "secundaria",
  },
  {
    id: 2,
    tipo: "usuario",
  },
];

const imagenes: Array<Image> = [
  {
    id: 0,
    nombre: "imagen de prueba",
    URL: "https://victor.com.co/wp-content/uploads/2022/09/111-1.jpg",
    ancho: 1000,
    alto: 1500,
    tipo: tiposImagenes[0],
    producto: 0,
  },
  {
    id: 1,
    nombre: "camisa mujer",
    URL: "https://armatura.com.co/cdn/shop/files/camisa-oxford-mujer-blanco_1__11zon_11zon_99bc57d4-8068-4b97-a405-54bf08bbd8af.webp?v=1699367664&width=900",
    ancho: 1080,
    alto: 1628,
    tipo: tiposImagenes[0],
    producto: 1,
  },
  {
    id: 2,
    nombre: "camisa mujer",
    URL: "https://xuss.vteximg.com.br/arquivos/ids/172058-1000-1500/camisa-mujer-xuss-bl-0226-blanco-1.jpg?v=638071447016300000",
    ancho: 1000,
    alto: 1500,
    tipo: tiposImagenes[1],
    producto: 1,
  },
  {
    id: 3,
    nombre: "rubiu malo",
    URL: "https://imagessl.casadellibro.com/img/autores/w/20094235.webp",
    ancho: 720,
    alto: 721,
    tipo: tiposImagenes[2],
    usuario: 0,
  },
];

/**
 *
 * @param promp
 * @returns {getImage, setImage}
 * @description esta duncion hace una llamado a la api y recupera la imagen que le pides,
 * le puedes dar un usuario o un producto
 */
export function useImage(promp: ExtraPromp) {
  const [getImage, setImage] = useState(promp);
  const [getResult, setResult] = useState(imagenes[0]);
  useEffect(() => {
    /*aca se haria el fecth*/
    let indice = imagenes.findIndex(
      (elemento) =>
        (elemento.producto === promp.productoId ||
        elemento.usuario === promp.usuarioId) && 
        (elemento.tipo.id === promp.tipo || 
        promp.tipo === -1)
    );
    setResult(imagenes[indice]);
  }, [getImage]);
  return {
    getImage: getResult,
    setImage,
  };
}



export function useImages(promp:Promp){
  const [getImages, setImages] = useState(promp);
  const [getResult, setResult] = useState([imagenes[0]]);
  useEffect(() => {
    /*aca se haria el fecth*/
    let imgs = imagenes.filter((img)=>(img.usuario === promp.usuarioId || img.producto === promp.productoId));
    setResult(imgs);
  }, [getImages]);
  return {
    getImages: getResult,
    setImages,
  };
}
