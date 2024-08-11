import { Sequelize } from "sequelize";
import { createUserModel } from "../models/userSchema.js";


const sequelize = new Sequelize('Madhyam', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
let Model=null;
const connection= async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    Model = await createUserModel(sequelize)
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}
export  {
    connection,
    Model
};