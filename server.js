import express from "express";
import routes from "./routers/index.js";
import connectMongoDB from "./config/dbConfig.js";

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.DB_URL || "mongodb://localhost:27017/mydb";
connectMongoDB(url);
routes(app);
app.listen(port, () => {
   console.log(`run with port: ${port}`);
});
