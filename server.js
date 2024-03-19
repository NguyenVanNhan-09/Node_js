import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/dbConfig.js";
import routes from "./routers/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const url = process.env.DB_URL || "mongodb://localhost:27017/dbmovie";
connectMongoDB(url);
routes(app);
app.listen(port, () => {
   console.log(`successfully with port: ${port}`);
});
