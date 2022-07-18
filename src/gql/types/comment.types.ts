import { gql } from "apollo-server-express";

const typeDefs = gql`
  type BlogComment {
    id: ID
    blog_id: ID
    commenter_name: String
    comment: String
    blog_post: Blog
    createdAt: String
    updatedAt: String
  }

  input BlogCommentInput {
    commenter_name: String!
    comment: String!
    blog_id: ID!
  }

  input EditBlogCommentInput {
    id: ID!
    blog_id: ID
    commenter_name: String
    comment: String
  }

  type Query {
    fetchBlogComments: [BlogComment]
    fetchBlogComment(id: ID!): BlogComment
  }

  type Mutation {
    addBlogComment(input: BlogCommentInput): BlogComment
    editBlogComment(id: ID, input: EditBlogCommentInput): BlogComment
    removeBlogComment(id: ID): BlogComment
  }
`;

export default typeDefs;
