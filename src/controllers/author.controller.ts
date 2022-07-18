import {
  getAllAuthors,
  getAuthor,
  updateAuthor,
  createAuthor,
  deleteAuthor,
} from "../services/author.service";

const fetchAuthors = async (parent: any, args: any) => {
  const authorsData = await getAllAuthors();
  return authorsData;
};

const fetchAuthor = async (parent: any, args: any) => {
  const { id } = args;
  const author = await getAuthor(id);
  return author;
};

const addAuthor = async (parent: any, args: any) => {
  const { input } = args;
  const author = await createAuthor(input);
  console.log(author);
  return author;
};

const editAuthor = async (parent: any, args: any) => {
  const { input } = args;
  const authorId = input?.id;
  const updated = await updateAuthor(authorId, input);
  if (updated) {
    const author = await getAuthor(authorId);
    return author;
  }
  return updated;
};

const removeAuthor = async (parent: any, args: any) => {
  const { id } = args;
  const author = await getAuthor(id);
  const deleted = await deleteAuthor(id);
  if(deleted){
    return author;
  } 
  return deleted;
};


export {
  fetchAuthors,
  fetchAuthor,
  addAuthor,
  editAuthor,
  removeAuthor
}