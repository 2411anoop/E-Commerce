import bcrypt  from 'bcrypt'; // for hashing password we will use bcrypt library

export const hashPassword = async(password) => {
    try{
        const saltRounds=10; // jitna jyada yeh badhega utna jyada cpu use hoga
        const hashedPassword= await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch(err){
        console.error(err)
        console.log("Database Connection Issues");
    }
};

export const comparePassword = async(password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword);
}

