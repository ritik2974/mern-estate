import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup=async(req,res,next)=>{
const {username,email,password}=req.body;
const hashedPassword=bcryptjs.hashSync(password,10);
const newUser=new User({username,email,password:hashedPassword});

try {
await newUser.save();// for saving in database,first declare any variable ,the variablename=new (modelname){info we recieved}
//then variablename.save
//here await is used as this operation takes time,by using await code will stay in this line till this operation is completed,then we go to next line and if await is used then async will also be used  
res.status(201).json("User created succesfully");
} catch (error) {
    next(error);
}



} 