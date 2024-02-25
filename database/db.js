const mongoose=require("mongoose");

const connect=async()=>{
    try{
        const URL=await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    }
    catch(error){
        console.log(error)
    }
}

module.exports=connect