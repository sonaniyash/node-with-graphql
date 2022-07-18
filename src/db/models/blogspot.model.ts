import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/sequelize.config";
import BlogAuthor from "./blogAuthor.model";
// --------------------------------------------------------
interface BlogAttributes {
  id: number;
  title: string;
  slug_url: string;
  description?: string;
  author_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface BlogInput extends Optional<BlogAttributes, "id"> {}
export interface BlogOutput extends Required<BlogAttributes> {}

class Blogspot
  extends Model<BlogAttributes, BlogInput>
  implements BlogAttributes
{
  public id!: number;
  public title!: string;
  public slug_url!: string;
  public description!: string;
  public author_id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Blogspot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: BlogAuthor,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "Blogspot",
  }
);

Blogspot.belongsTo(BlogAuthor, {
  targetKey: "id",
  foreignKey: {
    field:"author_id",
    allowNull: false,
  },
});

export default Blogspot;
