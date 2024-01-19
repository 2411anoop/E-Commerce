import mongoose  from 'mongoose';

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected Successfully`);
    }catch(err){
        console.error(err)
        console.log("Database Connection Issues");
    }
}

export default connectDB;