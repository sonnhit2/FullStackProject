import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data)=>{
    return new Promise((resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);

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


module.exports = {
    createNewUser: createNewUser
}