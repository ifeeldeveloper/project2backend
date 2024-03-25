import { Sequelize, DataTypes } from "sequelize";
import dbConfig from "../config/dbConfig";
import { join } from "path";

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: 3306,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    idle: dbConfig.pool.idle,
    acquire: dbConfig.pool.acquire
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected")
  })
  .catch((err) => {
    console.log(err)
  })

const db: any = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false }).then(() => {
  console.log("Migrated Successfully")
})

export default db