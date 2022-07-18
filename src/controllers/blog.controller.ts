import {
  getAllBlogs,
  getBlog,
  updateBlog,
  createBlog,
  deleteBlog,
} from "../services/blog.service";

const fetchBlogs = async (parent: any, args: any) => {
  const BlogsData = await getAllBlogs();
  console.log(BlogsData);
  return BlogsData;
};

const fetchBlog = async (parent: any, args: any) => {
  const { id } = args;
  const Blog = await getBlog(id);
  return Blog;
};

const addBlog = async (parent: any, args: any) => {
  const { input } = args;
  const Blog = await createBlog(input);
  return Blog;
};

const editBlog = async (parent: any, args: any) => {
  const { id, input } = args;
  const Blog = await updateBlog(id, input);
  return Blog;
};

const removeBlog = async (parent: any, args: any) => {
  const { id } = args;
  const Blog = await deleteBlog(id);
  return Blog;
};

export {
  fetchBlogs,
  fetchBlog,
  editBlog,
  removeBlog
}