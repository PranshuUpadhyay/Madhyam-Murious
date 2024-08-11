import { DataTypes } from "sequelize";


export const createUserModel=async(sequelize)=>{

    const User = sequelize.define('User',{
        firstname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:{
                    msg:"Please enter a valid email ID"
                }
            },
            notEmpty:true
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
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8,128]
            }
        }

    });
    return User;

};
export const createSupplierModel=async(sequelize)=>{
        const Supplier =sequelize.define('Supplier',{
            company:{
                type:DataTypes.STRING,
                allowNull:false
            },
            address:{
                type:DataTypes.STRING,
                allowNull:false
            },
            contact_number:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    len:[10,15]
                }
            }

        });
        return Supplier;
};
