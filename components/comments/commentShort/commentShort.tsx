"use client";

//<CommentShort
//userId="1" // Reemplaza con el ID real del usuario
//userName="Dario Gomez" // Reemplaza con el nombre real del usuario
//commentText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
///>

//recordar cambiar el src de la imagen

import React from "react";

interface CommentShortProps {
  userId: string;
  userName: string;
  commentText: string;
}

const CommentShort: React.FC<CommentShortProps> = ({
  userId,
  userName,
  commentText,
}) => {
  return (
    <div className="flex flex-wrap p-4 gap-4">
      <div className="flex justify-center">
        <img
          src={`https://reqres.in/img/faces/${Number(userId)}-image.jpg`}
          alt={`${userName}'s avatar`}
          className="rounded-full w-14 h-14"
        ></img>
      </div>
      <section className="h-full w-3/4">
        <h2 className="text-mainColor inline">{`${userName}: `}&nbsp;</h2>
        <h3 className="inline">{commentText}</h3>
      </section>
    </div>
  );
};

export default CommentShort;
