import ProductsRouter from "./product.js";

export default function routes(app) {
   app.get("/", (req, res) => {
      res.send("Home");
   });
   app.use("/products", ProductsRouter);
}
