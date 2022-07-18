import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/sequelize.config";
import Blogspot from "./blogspot.model";

interface AuthorAttributes {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface AuthorInput extends Optional<AuthorAttributes, "id"> {}
export interface AuthorOutput extends Required<AuthorAttributes> {}

class BlogAuthor
  extends Model<AuthorAttributes, AuthorInput>
  implements AuthorAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BlogAuthor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "BlogAuthors",
  }
);

// BlogAuthor.hasMany(Blogspot, { foreignKey: "author_id" });

export default BlogAuthor;
