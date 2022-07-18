import {
  default as Blog,
  BlogInput,
  BlogOutput,
} from "../db/models/blogspot.model";
import { BlogAuthor } from "../db/models";

const getAllBlogs = async (): Promise<BlogOutput[]> => {
  return await Blog.findAll({
    include: {
      model: BlogAuthor,
      attributes: ["id", "name", "email"],
    },
  });
};

const getBlog = async (id: number): Promise<BlogOutput | null | undefined> => {
  return await Blog.findByPk(id);
};

const createBlog = async (payload: BlogInput): Promise<BlogOutput> => {
  const { id, ...param } = payload;

  return await Blog.create(param);
};

const updateBlog = async (id: number, param: BlogInput): Promise<any> => {
  await Blog.update(param, { where: { id } });
};

const deleteBlog = async (id: number): Promise<any> => {
  return await Blog.destroy({ where: { id } });
};

export {
  getAllBlogs,
  getBlog,
  createBlog,
  deleteBlog
};
