import { DataTypes, Model } from "sequelize"
const sequelize = require("../config/database");
const User = require("./User");
const Tag = require("./Tag");

class Blog extends Model {}

Blog.init(
  {
    title: {
      comment: "标题",
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      comment: "博客内容",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coverImage: {
      comment: "封面图",
      type: DataTypes.STRING,
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
    modelName: "Blog",
  }
);


// 博客与标签的关联关系
Blog.belongsToMany(Tag, {
  through: "Blog_Tag",
  as: "tags",
});

// 标签和博客的关联关系
Tag.belongsToMany(Blog, {
  through: "Blog_Tag",
  as: "blogs",
});


// 博客与用户的关联关系
Blog.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Blog, { foreignKey: "userId", as: "user" });

export default Blog;