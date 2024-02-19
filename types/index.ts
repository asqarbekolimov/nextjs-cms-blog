import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  category: ICategoryAndTags;
  tag: ICategoryAndTags;
  author: IAuthor;
  image: {
    url: string;
  };
  createdAt: string;
  content: {
    hmtl: string;
  };
}

export interface IAuthor {
  name: string;
  avatar: {
    url: string;
  };
}

export interface ICategoryAndTags {
  name: string;
  slug: string;
}
