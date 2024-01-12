import { useEffect, useState, useRef } from "react";


const comentarios = [
    {
      id: 1,
      usuario: 1,
      producto:0,
      commentText: "Hola, esto es un comentario corto.",
    },
    {
      id: 2,
      usuario: 2,
      producto:0,
      commentText: "Otro comentario breve.",
    },
    {
      id: 3,
      usuario: 3,
      producto:0,
      commentText:
        "Este es un comentario más largo que puede extenderse a varias líneas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 4,
      usuario: 4,
      producto:0,
      commentText: "Comentario corto.",
    },
    {
      id: 5,
      usuario: 5,
      producto:0,
      commentText:
        "Este es un comentario largo. Puede contener más información y detalles sobre el tema en cuestión. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      usuario: 6,
      producto:0,
      commentText: "¡Saludos desde la comunidad! 😊",
    },
    {
      id: 7,
      usuario: 7,
      producto:0,
      commentText: "Me encanta este lugar. Los comentarios son geniales.",
    },
    {
      id: 8,
      usuario: 8,
      producto:0,
      commentText: "Un comentario corto más para la lista.",
    },
    {
      id: 9,
      usuario: 9,
      producto:0,
      commentText: "Probando, probando...",
    },
    {
      id: 10,
      usuario: 10,
      producto:0,
      commentText: "¿Alguien más está emocionado por el fin de semana?",
    },
    {
      id: 11,
      usuario: 11,
      producto:0,
      commentText: "Comentario muy corto.",
    },
    {
      id: 12,
      usuario: 0,
      producto:0,
      commentText:
        "Este es un comentario aún más largo que el anterior. Puede contener información detallada sobre varios temas. ¡Espero que te guste!",
    },
];

export function useComments({productId}:any){
    const [getInfo, setInfo] = useState(productId);
    const result = useRef(comentarios);
    useEffect(()=>{
        let actual = result.current;
        result.current = comentarios.filter((item)=>item.id === productId);
    }, [getInfo]);
    return{
        getComents:result.current,
        setComents:setInfo
    }
}