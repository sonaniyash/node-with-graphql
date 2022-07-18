import {
  default as BlogAuthor,
  AuthorInput,
  AuthorOutput,
} from "../db/models/blogAuthor.model";

const getAllAuthors = async (): Promise<AuthorOutput[]> => {
  return await BlogAuthor.findAll();
};

const getAuthor = async (
  id: number
): Promise<AuthorOutput | null | undefined> => {
  return await BlogAuthor.findByPk(id);
};

const createAuthor = async (
  payload: AuthorInput
): Promise<AuthorOutput> => {
  const { id, ...param } = payload;

  return await BlogAuthor.create(param);
};

const updateAuthor = async (
  id: number,
  param: AuthorInput
): Promise<any> => {
  return await BlogAuthor.update(param, {
    where: { id },
  });
};

const deleteAuthor = async (id: number): Promise<any> => {
  return await BlogAuthor.destroy({ where: { id } });
};


export {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
}