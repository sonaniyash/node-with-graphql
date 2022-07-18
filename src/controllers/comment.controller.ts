import {
  getAllBlogComments,
  getBlogComment,
  updateBlogComment,
  createBlogComment,
  deleteBlogComment,
} from "../services/comment.service";

const fetchBlogComments = async (parent: any, args: any) => {
  const BlogCommentsData = await getAllBlogComments();
  return BlogCommentsData;
};

const fetchBlogComment = async (parent: any, args: any) => {
  const { id } = args;
  const BlogComment = await getBlogComment(id);
  return BlogComment;
};

const addBlogComment = async (parent: any, args: any) => {
  const { input } = args;
  const BlogComment = await createBlogComment(input);
  return BlogComment;
};

const editBlogComment = async (parent: any, args: any) => {
  const { id, input } = args;
  const BlogComment = await updateBlogComment(id, input);
  return BlogComment;
};

const removeBlogComment = async (parent: any, args: any) => {
  const { id } = args;
  const BlogComment = await deleteBlogComment(id);
  return BlogComment;
};

export {
  fetchBlogComments,
  fetchBlogComment,
  addBlogComment,
  editBlogComment,
  removeBlogComment
}