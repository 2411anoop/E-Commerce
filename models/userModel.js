import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user' 
    },

},{timestamps:true} // jb nya user aayega uska timestamp true mark ho jaygea
)

export default mongoose.model('users',userSchema);