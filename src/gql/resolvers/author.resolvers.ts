import {
  fetchAuthor,
  fetchAuthors,
  addAuthor,
  editAuthor,
  removeAuthor,
} from "../../controllers/author.controller";

const AuthorResolvers = {
  Query: {
    fetchAuthors,
    fetchAuthor,
  },
  Mutation: {
    addAuthor,
    editAuthor,
    removeAuthor,
  },
};

export default AuthorResolvers;
