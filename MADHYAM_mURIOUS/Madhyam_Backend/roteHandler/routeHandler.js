import bcrypt from 'bcrypt';
import router from '../views/routes.js';
import { Model } from '../postgres/database.js';
import { where } from 'sequelize';

export const registerUser =async(req,res)=>{
    try {
        const user = await Model.findOne({where:{email:req.params.email}});
        if(user==null){
        await Model.create(req.body);
        return res.status(200).json({"message:":"User registered succesfully"});
        }



    } catch (error) {
        console.log(error);
        return res.status(500).json({"error":"internal server error"});
    }
}