import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CategoriesSchema = new Schema(
   {
      name: { type: String },
      description: { type: String },
      author: { type: String },
      price: { type: Number },
   },
   { timeseries: true, versionKey: false }
);
const Categories = mongoose.model("Categories", CategoriesSchema);
export default Categories;
