import express from 'express' ;
import {connection , Model} from './postgres/database.js';
import bcrypt from 'bcrypt';
import router from './views/routes.js';
const app =  express();
const port = process.env.PORT||5500;
app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
});


connection();