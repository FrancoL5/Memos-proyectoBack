import {Sequelize} from "sequelize"
import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize(
    "memos",
    process.env.USER,
    process.env.PASS,
    {
        host:"localhost",
        dialect:"mysql",
        define: {freezeTableName:true},
        models:["../models"]
    }
)

const authenticate = () => {
    sequelize.authenticate().then(async () => {console.log("conexión exitosa")}).catch(console.error)
}

export {sequelize, authenticate}