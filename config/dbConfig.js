import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export default async function connectMongoDB() {
   try {
      const dbUrl = process.env.DB_URL;
      await mongoose.connect(dbUrl);
      console.log("Connect successfully");
   } catch (error) {
      console.log("Connect failure");
   }
}
