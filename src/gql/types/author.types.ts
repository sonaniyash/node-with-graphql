import { gql } from "apollo-server-express";

const AuthorTypeDefs = gql`
  type Author {
    id: ID
    name: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  input AuthorInput {
    name: String!
    email: String!
    password: String!
  }
  
  input EditAuthorInput {
    id: ID!
    name: String
    email: String
    password: String
  }

  type Query {
    fetchAuthors: [Author]
    fetchAuthor(id: ID!): Author
  }

  type Mutation {
    addAuthor(input : AuthorInput): Author
    editAuthor(input: EditAuthorInput): Author
    removeAuthor(id: ID): Author
  }
`;

export default AuthorTypeDefs;