"use client"
import { useComments } from "@/hooks/feching/useCommets";
import CommentLong from "../commentLong/commentLong";
import CommentShort from "../commentShort/commentShort";

//cambiar comentarios por el fetch de las publicaciones

const comentarios = [
  {
    userId: "1",
    userName: "Carlos Pérez",
    commentText: "Hola, esto es un comentario corto.",
  },
  {
    userId: "2",
    userName: "Ana Rodríguez",
    commentText: "Otro comentario breve.",
  },
  {
    userId: "3",
    userName: "Luis García",
    commentText:
      "Este es un comentario más largo que puede extenderse a varias líneas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  {
    userId: "4",
    userName: "Laura Martínez",
    commentText: "Comentario corto.",
  },
  {
    userId: "5",
    userName: "Pedro Sánchez",
    commentText:
      "Este es un comentario largo. Puede contener más información y detalles sobre el tema en cuestión. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    userId: "6",
    userName: "Marta López",
    commentText: "¡Saludos desde la comunidad! 😊",
  },
  {
    userId: "7",
    userName: "Alejandro Fernández",
    commentText: "Me encanta este lugar. Los comentarios son geniales.",
  },
  {
    userId: "8",
    userName: "Isabel González",
    commentText: "Un comentario corto más para la lista.",
  },
  {
    userId: "9",
    userName: "Juan Ruiz",
    commentText: "Probando, probando...",
  },
  {
    userId: "10",
    userName: "Elena Navarro",
    commentText: "¿Alguien más está emocionado por el fin de semana?",
  },
  {
    userId: "11",
    userName: "Roberto López",
    commentText: "Comentario muy corto.",
  },
  {
    userId: "12",
    userName: "María García",
    commentText:
      "Este es un comentario aún más largo que el anterior. Puede contener información detallada sobre varios temas. ¡Espero que te guste!",
  },
];

const CommentList = ({productId}:any) => {
  const {getComents} = useComments({productId});
  return (
    <div className="CommentList flex flex-wrap flex-col" role="list">
      {getComents.map((item, index)=>{
        let texto = item.commentText;
        if(texto.length < 50)
          return (<CommentShort key={index} userId={item.usuario} commentText={texto}/>);
        return(<CommentLong key={index} userId={item.usuario} commentText={texto}/>);
      })}
    </div>
  );
};

export default CommentList;
