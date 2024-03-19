import routes from "express";
import ProductController from "../controllers/producController.js";
const ProductsRouter = routes();
const productController = new ProductController();
ProductsRouter.get("/", productController.getAllProduct);
ProductsRouter.get("/:id", productController.getDetailProduct);
ProductsRouter.post("/", productController.createProduct);
ProductsRouter.put("/:id", productController.updateProduct);
ProductsRouter.delete("/:id", productController.deleteProduct);
export default ProductsRouter;
