import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../UtilityCode/error.js";
import jwt from "jsonwebtoken";

export const signup =async(req,res,next)=>{
    const {username,email,password} = req.body;

    if(!username  || !email ||!password ||username==='' || email==='' || password===''){
        return next(errorHandler(400,"All fields are required"));
    }
    const validUser = await User.findOne({email:email});
        if(validUser){
            return next(errorHandler(400,"Email already registered,Please login"));}
    const hashedpassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username:username,
        email:email,
        password:hashedpassword
    });
    try {
        await newUser.save();
        console.log('server auth controller');
        return res.json({message:'Registration Successfull '+username})  
    } catch (error) {
        next(error);
    }  
}

export const signin = async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email ||!password || email==='' || password===''){
        return next(errorHandler(400,"All fields are required"));
    }

    try {
        const validUser = await User.findOne({email:email});
        if(!validUser){
            return next(errorHandler(404,"Invalid email or Password"));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(404,"Invalid email or Password"));
        }
        const token =jwt.sign({id:validUser._id, isAdmin:validUser.isAdmin},process.env.SECRET_key);
        const { password: pass, ...rest} = validUser._doc;


        res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest);
    } catch (error) {
        next(error);
    }
}


export const googleAuth = async(req,res,next) =>{
    const {username,email,googlePhotoUrl} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.SECRET_key);
            const {password,...rest} = user._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest);
        }else{
            const randompassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
            const hashedpassword = bcryptjs.hashSync(randompassword,10);
            const newUser = new User({
                username:username.toLowerCase().split(' ').join('') +Math.random().toString(9).slice(-4),
                email,
                password:hashedpassword,
                profileImage:googlePhotoUrl
            })
            await newUser.save();
            console.log();
            const token = jwt.sign({id:newUser._id, isAdmin:newUser.isAdmin},process.env.SECRET_key);
            const {password,...rest} = user._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest);
        }
    } catch (error) {
        next(error);
    }      
}