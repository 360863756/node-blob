import Sequelize from "Sequelize"

const sequelize = new Sequelize.Sequelize(
  "blob",
  "root",
  "123456",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize