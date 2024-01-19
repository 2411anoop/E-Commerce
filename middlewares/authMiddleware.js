import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected routes token base

export const requireSignIn = async(req,res,next)=>{
    try{
        const decode =JWT.verify(req.headers.authorization , process.env.JWT_SECRET);
        req.user=decode;
        next();// after decode call next to move further
    }
    catch(error){
        console.log(error);
    }
}

//admin access

export const isAdmin=async(req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id);
        if(user.role === 'user'){// agr admin nhi hai tb
            return res.status(401).send({
                success:false,
                message:"UnAuthorized Access",
            });
        }
        else{
            next();
        }
    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"Error in Admin middleware",
        })
    }
}
