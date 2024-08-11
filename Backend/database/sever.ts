//----------

import {Sequelize} from "sequelize";
// import db_init from "./initialize";

const sequelizeConnection =  new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "Madhyam",
    username: "postgres",
    password: "root"
});
export const connection= async()=>{
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection has been established successfully.');
        await sequelizeConnection.sync({alter:true});
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
    };
export default sequelizeConnection;    


