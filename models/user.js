import { Sequelize } from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize
const User = db.define("user",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING(100)
    },
    email: {
        type: Sequelize.STRING(100)
    },
    password: {
        type: Sequelize.STRING(100)
    },
    permission: {
        type: Sequelize.STRING(1)
    } 
},  {
        timestamps:false,
        freezeTableName: true 

}) 
export default User
