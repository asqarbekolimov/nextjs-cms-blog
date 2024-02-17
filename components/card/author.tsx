import { IAuthor } from "@/types";
import Image from "next/image";
import React from "react";

function AuthorCard(author: IAuthor) {
  return (
    <div className="flex-col space-y-2 w-52 text-center">
      <div className="w-full h-52 relative">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <h2 className="text-2xl font-createRound">{author.name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-white">04</span> Published posts
      </p>
    </div>
  );
}

export default AuthorCard;
