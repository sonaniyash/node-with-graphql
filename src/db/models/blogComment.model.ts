import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/sequelize.config";
import Blogspot from "./blogspot.model";
// --------------------------------------------------------

interface CommentAttributes {
  id: number;
  blog_id: number;
  commenter_name: string;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface CommentInput extends Optional<CommentAttributes, "id"> {}
export interface CommentOutput extends Required<CommentAttributes> {}

class BlogComment
  extends Model<CommentAttributes, CommentInput>
  implements CommentAttributes
{
  public id!: number;
  public blog_id!: number;
  public commenter_name!: string;
  public comment!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BlogComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Blogspot,
        key: "id",
      },
    },
    commenter_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "BlogComments",
  }
);

export default BlogComment;
