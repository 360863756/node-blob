import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
class Tag extends Model {}

Tag.init(
  {
    name: {
      comment: "标签名称",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isDeleted: {
      comment: "是否已经删除",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Tag",
  }
);
export default Tag;