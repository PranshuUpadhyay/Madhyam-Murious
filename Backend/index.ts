//lint 
import express from "express";
import { connection } from "./database/sever";
import router from "./route/routes";
// var http = require('http');
// var path = require("path");
import path from "node:path/posix";
const app = express();
const port = 5500;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(express.static('src'));
// app.use(express.static());
app.get('/',(req,res)=>{
    res.send('hello,typescript Node Express!');
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
connection();

