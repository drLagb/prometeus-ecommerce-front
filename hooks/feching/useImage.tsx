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
    id: -1,
    nombre: "imagen de prueba",
    URL: "https://media.istockphoto.com/id/1040250650/es/foto/fondo-de-estudio-blanco.jpg?s=612x612&w=0&k=20&c=E8ObrYH_ftiHT6ehVtGqGYszCPCLIraLA17g4B17mJ8=",
    ancho: 1000,
    alto: 1500,
    tipo: tiposImagenes[0],
    producto: 0,
  },
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
  {
    id:4,
    nombre:"",
    URL:`https://reqres.in/img/faces/1-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:1
  },
  {
    id:5,
    nombre:"",
    URL:`https://reqres.in/img/faces/2-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:2
  },
  {
    id:6,
    nombre:"",
    URL:`https://reqres.in/img/faces/3-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:3
  },
  {
    id:7,
    nombre:"",
    URL:`https://reqres.in/img/faces/4-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:4
  },
  {
    id:8,
    nombre:"",
    URL:`https://reqres.in/img/faces/5-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:5
  },
  {
    id:9,
    nombre:"",
    URL:`https://reqres.in/img/faces/6-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:6
  },
  {
    id:10,
    nombre:"",
    URL:`https://reqres.in/img/faces/7-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:7
  },
  {
    id:11,
    nombre:"",
    URL:`https://reqres.in/img/faces/8-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:8
  },
  {
    id:12,
    nombre:"",
    URL:`https://reqres.in/img/faces/9-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:9
  },
  {
    id:13,
    nombre:"",
    URL:`https://reqres.in/img/faces/10-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:10
  },
  {
    id:14,
    nombre:"",
    URL:`https://reqres.in/img/faces/11-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:11
  },
  {
    id:15,
    nombre:"",
    URL:`https://reqres.in/img/faces/12-image.jpg`,
    ancho:50,
    alto:50,
    tipo: tiposImagenes[2],
    usuario:12
  }
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
      (elemento) =>{
        if(promp.usuarioId){
          return elemento.usuario === promp.usuarioId && promp.tipo === elemento.tipo.id;
        }
        return elemento.producto === promp.productoId && promp.tipo === elemento.tipo.id;
      }
    );
    setResult(imagenes[indice]);
  }, [getImage]);
  return {
    getImage: getResult,
    setImage,
  };
}


/**
 * 
 * @param promp 
 * @returns {getImages, setImages}
 * @description esta es funcion que recopila todas las imagenes de un usuario o producto
 */
export function useImages(promp:Promp){
  const [getImages, setImages] = useState(promp);
  const [getResult, setResult] = useState([imagenes[0]]);
  useEffect(() => {
    /*aca se haria el fecth*/
    let imgs:Array<Image> = [];
    if(promp.usuarioId)
      imgs = imagenes.filter((img)=>img.usuario === promp.usuarioId);
    else
      imgs = imagenes.filter((img)=>img.producto === promp.productoId);
    setResult(imgs);
  }, [getImages]);
  return {
    getImages: getResult,
    setImages,
  };
}
