import { IAuthor, IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getAuthors = async () => {
  const qeury = gql`
    query MyQuery {
      authors {
        name
        id
        bio
        avatar {
          url
        }
        blogs {
          id
        }
      }
    }
  `;

  const { authors } = await request<{ authors: IAuthor[] }>(graphqlAPI, qeury);
  return authors;
};

export const getDetailedAuthor = async (id: string) => {
  const query = gql`
    query MyQuery($id: ID) {
      author(where: { id: $id }) {
        avatar {
          url
        }
        bio
        name
        blogs {
          id
          title
          description
          author {
            name
            bio
            avatar {
              url
            }
          }
          content {
            html
          }
          createdAt
          image {
            url
          }
          slug
          tag {
            name
            slug
          }
          category {
            name
            slug
          }
        }
      }
    }
  `;
  const { author } = await request<{ author: IAuthor }>(graphqlAPI, query, {
    id,
  });
  return author;
};
