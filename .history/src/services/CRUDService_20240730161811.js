import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender==='1'?true:false,
                roleId: data.roleId
            });

            resolve("Create user successfull !");
        } catch (e) {
            reject(e);
        }    
    })
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e){
            reject(e);
        }
    })
}

let getAllUser = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let users = db.User.findAll({
                raw: true,
            });           
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById=()=>{
    
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser:getAllUser,
    getUserInfoById:getUserInfoById
}