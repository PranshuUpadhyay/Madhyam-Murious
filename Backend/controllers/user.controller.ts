//-------

// import createUserModel from "../models/UserModel";
// import { Request, Response } from 'express';
// import { where } from "sequelize";

// export const addUser =async(req,res)=>{
//     const {name,email}=req.body;
//     try {
//         const user = await createUserModel.findOne({where:{email:email}});
//         if(user==null){
//         await createUserModel.create(req.body);
//         res.status(200).send('User registered successfully!');
//         }
//     }catch (error) {
//         console.log(error);
//         return res.status(500).json({"error":"internal server error"});
//     }

// }