//====
import createUserModel from "../models/UserModel";
import express from "express";
//import { registerUser } from "../controllers/user.controller";
const router = express.Router();
// router.get("/getAll",registerUser);
// router.get("/getuser",);
router.post("/adduser",async(req,res)=>{
        const {name,email}=req.body;
        try {
            const user = await createUserModel.findOne({where:{email:email}});
            console.log(user);
            if(user==null){
                console.log('user is null')
            await createUserModel.create(req.body);
            console.log("created the model with user");
            res.status(200).send('User registered successfully!');
            }
        }catch (error) {
            console.log(error);
            return res.status(500).json({"error":"internal server error"});
        }
    
});
// router.post("/addsupplier",addsupplier);
// router.post("/userdata",userdata);
// router.put("/user/:email",UpdateUser);


export default router;
