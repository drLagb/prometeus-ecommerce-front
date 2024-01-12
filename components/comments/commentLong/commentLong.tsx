"use client";
import { useUser } from "@/hooks/feching/useUser";
import { useImage } from "@/hooks/feching/useImage";

//<CommentLong
//userId="1" // Reemplaza con el ID real del usuario
//userName="Dario Gomez" // Reemplaza con el nombre real del usuario
//commentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
///>

//recordar cambiar el src de la imagen

import React, { useState } from "react";

interface CommentLongProps {
  userId: number;
  commentText: string;
}

const CommentLong: React.FC<CommentLongProps> = ({
  userId,
  commentText,
}) => {
  const {getUser} = useUser({id:userId});
  const {getImage} = useImage({tipo:2, usuarioId:userId});
  const [openComment, setOpenComment] = useState(false);
  const shortenedComment = commentText.slice(0, 50);
  return (
    <div className={`flex flex-wrap p-4 gap-4`} role="listitem">
      <div className="flex justify-center">
        <img
          src={getImage.URL}
          alt={`${getUser.nombre}'s avatar`}
          className="rounded-full w-14 h-14"
        ></img>
      </div>
      <section className="h-full w-3/4">
        <h2 className="text-mainColor inline">{`${getUser.nombre}: `}&nbsp;</h2>
        <h3
          className={`overflow-hidden`}
          style={{
            display: "inline",
            maxWidth: openComment ? "none" : "100%",
          }}
        >
          {openComment === true ? commentText : shortenedComment + "..."}
          &nbsp;&nbsp;
        </h3>
        <span
          className="text-mainColor inline underline cursor-pointer"
          onClick={() => setOpenComment(!openComment)}
        >
          {openComment === true ? "" : "abrir"}
        </span>
      </section>
    </div>
  );
};

export default CommentLong;
