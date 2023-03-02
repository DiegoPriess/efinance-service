import sequelize from "sequelize"
const db = new sequelize("efinance", "root", "root", {
    dialect: "mysql",
    host: "localhost"
})

export default db