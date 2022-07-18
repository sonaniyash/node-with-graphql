import {
  fetchBlogComment,
  fetchBlogComments,
  addBlogComment,
  editBlogComment,
  removeBlogComment,
} from "../../controllers/comment.controller";

const blogResolvers = {
  Query: {
    fetchBlogComment,
    fetchBlogComments,
  },
  Mutation: {
    addBlogComment,
    editBlogComment,
    removeBlogComment,
  },
};

export default blogResolvers;
