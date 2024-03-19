import mongoose from "mongoose";
const Schema = mongoose.Schema;
const GenresSchema = new Schema(
   {
      name: { type: String },
      description: { type: String },
      author: { type: String },
      price: { type: Number },
   },
   { timeseries: true, versionKey: false }
);
const Genres = mongoose.model("Genres", GenresSchema);
export default Genres;
