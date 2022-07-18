import { gql } from "apollo-server-express";

const blogTypeDefs = gql`
  type Blog {
    id: ID
    title: String
    slug_url: String
    description: String
    author_id: ID
    author: Author
    createdAt: String
    updatedAt: String
  }

  input BlogInput {
    title: String!
    slug_url: String!
    description: String!
    author_id: ID!
  }

  input EditBlogInput {
    id: ID!
    title: String
    slug_url: String
    description: String
    author_id: ID
  }

  type Query {
    fetchBlogs: [Blog]
    fetchBlog(id: ID!): Blog
  }

  type Mutation {
    addBlog(input: BlogInput): Blog
    editBlog(id: ID, input: EditBlogInput): Blog
    removeBlog(id: ID): Blog
  }
`;

export default blogTypeDefs;
