import {
  fetchBlog,
  fetchBlogs,
  addBlog,
  editBlog,
  removeBlog,
} from "../../controllers/blog.controller";

const blogResolvers = {
    Query: {
      fetchBlogs,
      fetchBlog,
    },
    Mutation:{
      addBlog,
      editBlog,
      removeBlog,
    },
  };
  
  export default blogResolvers;
  