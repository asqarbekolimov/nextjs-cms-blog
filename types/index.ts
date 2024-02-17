import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface IBlog {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface IAuthor {
  image: string;
  name: string;
}
