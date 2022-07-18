import {
    default as Comment,
    CommentInput,
    CommentOutput,
} from "../db/models/blogComment.model";
import { Blogspot } from "../db/models";

const getAllBlogComments = async (): Promise<CommentOutput[]> => {
  return await Comment.findAll({
    include: {
      model: Blogspot,
    },
  });
};

const getBlogComment = async (
  id: number
): Promise<CommentOutput | null | undefined> => {
  return await Comment.findByPk(id, {
    include: {
      model: Blogspot,
    },
  });
};

const createBlogComment = async (
  payload: CommentInput
): Promise<CommentOutput> => {
  const { id, ...param } = payload;

  return await Comment.create(param);
};

const updateBlogComment = async (
  id: number,
  param: CommentInput
): Promise<any> => {
  await Comment.update(param, { where: { id } });
};

const deleteBlogComment = async (id: number): Promise<any> => {
  return await Comment.destroy({ where: { id } });
};

export {
  getAllBlogComments,
  getBlogComment,
  createBlogComment,
  updateBlogComment,
  deleteBlogComment
}