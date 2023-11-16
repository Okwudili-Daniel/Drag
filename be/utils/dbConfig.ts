import mongoose from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/nurseryDB";

const dbConnection = async () =>{
   await mongoose.connect(URL).then(() =>{
    console.log("DB connection established")
   })
}

export default dbConnection;