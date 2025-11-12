
import { User } from "../models/User.js";
import gentoken from "../utils/token.js";
import bcrypt from "bcrypt"

export const signUp=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        let user=await User.findOne({email})
        if(user){   
            return res.status(400).json({message:"user already exixt. "})
        }
        if(password.length<6){
             return res.status(400).json({message:"password must be of atleast 8 character "})
        }
        
        const hashedpassword=await bcrypt.hash(password,10)
        user=await User.create({
            name,
            email,            
            password:hashedpassword
        })
        const token=await gentoken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })
        return res.status(201).json(user)
    }
    catch(error){
        return res.status(500).json(`signup error ${error}`)
    }
}


export const signIn=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"user does not exixt . "})
        } 
        
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"incorrect password "})
        }
        
        
        const token=await gentoken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })
        return res.status(201).json(user)
    }
    catch(error){
        return res.status(500).json(`signin error ${error}`)
    }
}  


export const signOut=async(req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"log out suesscufully"})   
        
    }
    catch(error){
        return res.status(500).json(`signout  error ${error}`)
    }
}


export const googleAuth=async (req,res) => {
    try {
        const {name,email}=req.body
        let user=await User.findOne({email})
        if(!user){
            user=await User.create({
                name,email
            })
        }

        const token=await gentoken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })
  
        return res.status(200).json(user)


    } catch (error) {
         return res.status(500).json(`googleAuth error ${error}`)
    }
}

