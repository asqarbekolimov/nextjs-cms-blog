import { IBlog, ICategoryAndTags } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCategories = async () => {
  const query = gql`
   query MyQuery() {
    categories{
      name
      slug
    }
   }
  `;
  const { categories } = await request<{ categories: ICategoryAndTags[] }>(
    graphqlAPI,
    query
  );
  return categories;
};

export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
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
        name
      }
    }
  `;

  const { category } = await request<{
    category: { blogs: IBlog[]; name: string };
  }>(graphqlAPI, query, { slug });
  return category;
};
