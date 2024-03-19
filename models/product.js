import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
   {
      title: { tyoe: String, required: true },
      description: { type: String },
   },
   {
      timeseries: true,
      versionKey: false,
   }
);
export default ProductSchema;
