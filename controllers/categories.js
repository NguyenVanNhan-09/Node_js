import Categories from "../models/categories.js";

class CategoriesController {
   async getAllCategories(req, res) {
      try {
         const data = await Categories.find();
         res.status(200).json({ message: "get done", data });
      } catch (error) {
         res.status(400).json({ message: "get false" });
      }
   }
   async getDetailCategories(req, res) {
      try {
         const data = await Categories.findById(req.params.id);
         res.status(200).json({ message: "get detail done", data });
      } catch (error) {
         res.status(400).json({ message: "get detail false" });
      }
   }
   async createCategory(req, res) {
      try {
         const data = await Categories.create(req.body);
         res.status(200).json({ message: "get add done", data });
      } catch (error) {
         res.status(400).json({ message: "get add false" });
      }
   }
   async updateCategory(req, res) {
      try {
         const data = await Categories.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
         );
         res.status(200).json({ message: "get update done", data });
      } catch (error) {
         res.status(400).json({ message: "get update false" });
      }
   }
   async deleteCategory(req, res) {
      try {
         const data = await Categories.findByIdAndDelete(req.params.id);
         res.status(200).json({ message: "delele  done", data });
      } catch (error) {
         res.status(400).json({ message: "delele false" });
      }
   }
}
export default CategoriesController;
