import dotenv from "dotenv";
import { exit } from "process";

dotenv.config();

import { BlogAuthor, BlogComment, Blogspot } from "./models";

const dbInit = () =>
  Promise.all([
    BlogAuthor.sync({ alter: true }),
    Blogspot.sync({ alter: true }),
    BlogComment.sync({ alter: true }),
  ]);

dbInit()
  .then(() => {
    console.log("Process Completed");
    exit(0);
  })
  .catch((error) => console.log(error));

export default dbInit;
