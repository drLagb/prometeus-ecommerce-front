"use client";
import { useUser } from "@/hooks/feching/useUser";
import { useImage } from "@/hooks/feching/useImage";
import Image from "next/image";

//<CommentShort
//userId="1" // Reemplaza con el ID real del usuario
//userName="Dario Gomez" // Reemplaza con el nombre real del usuario
//commentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
///>

//recordar cambiar el src de la imagen

import React from "react";

interface CommentShortProps {
  userId: number;
  commentText: string;
}

const CommentShort: React.FC<CommentShortProps> = ({
  userId,
  commentText,
}) => {
  const {getUser} = useUser({id:userId});
  const {getImage} = useImage({tipo:2, usuarioId:userId});
  return (
    <div className="flex flex-wrap p-4 gap-4" role="listitem">
      <div className="flex justify-center">
        <img
          src={getImage.URL}
          alt={`${getUser.nombre}'s avatar`}
          className="rounded-full w-14 h-14" 
          loading="lazy" 
        />
      </div>
      <section className="h-full w-3/4">
        <h2 className="text-mainColor inline">{`${getUser.nombre}: `}&nbsp;</h2>
        <h3 className="inline">{commentText}</h3>
      </section>
    </div>
  );
};

export default CommentShort;
