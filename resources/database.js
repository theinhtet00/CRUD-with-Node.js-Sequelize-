import { Sequelize } from "sequelize";

const db = new Sequelize("sequelizedb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  db.authenticate();
  console.log("database connection has been establish");
} catch (err) {
  console.log(err);
}

export default db;
