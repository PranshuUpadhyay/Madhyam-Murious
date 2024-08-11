//---
import { DataTypes,Model,Sequelize } from "sequelize";
import sequelizeConnection from "../database/sever";
// interface User{
//     firstname:string;
//     lastname:string;
//     email:string;
//     contact_number:string;
//     password:string;
//     }


class createUserModel extends Model{
   public firstname!: string;
   public lastname!: string;
   public email!: string;
   public contact_number!: string;
   public password!: string;
   public readonly CreatedAt!:Date;
   public readonly UpdatedAt!:Date;
   public readonly deletedAt!:Date;
}
createUserModel.init({
    
                firstname:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
                lastName:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
                email:{
                    type:DataTypes.STRING,
                    allowNull:false,
                    unique:true,
                    validate:{
                        isEmail:{
                            msg:"Please enter a valid email ID"
                        }
                    }
                },
                contact_number:{
                    type:DataTypes.STRING,
                    allowNull:false,
                    validate:{
                        len:[10,15]
                    }
                },
                password:{
                    type:DataTypes.STRING,
                    allowNull:false,
                    validate:{
                        len:[8,128]
                    }
                },

},{
    sequelize:sequelizeConnection,
    timestamps:true,
    paranoid:true
});

export default createUserModel;