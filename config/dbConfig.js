import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function connectMongoDB(dbUrl) {
   try {
      //   const dbUrl = process.env.DB_URL;
      await mongoose.connect(dbUrl);
      console.log("Connect successfully !!!");
   } catch (error) {
      console.log("Connect failure");
   }
}
export default connectMongoDB;
