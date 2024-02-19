import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        title
        createdAt
        author {
          name
          avatar {
            url
          }
        }
        category {
          name
          slug
        }
        description
        tag {
          name
          slug
        }
        image {
          url
        }
        content {
          html
        }
      }
    }
  `;

  try {
    const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
    return blogs;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error; // Rethrow the error to propagate it further if needed
  }
};
