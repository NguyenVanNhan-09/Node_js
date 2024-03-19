import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MoviesSchema = new Schema(
   {
      name: { type: String },
      description: { type: String },
      author: { type: String },
      price: { type: Number },
      // genres: "65f9d7bd0c24651f80a53640",
      category: {
         type: Schema.ObjectId,
         ref: "Categories",
         require: true,
      },
   },
   { timeseries: true, versionKey: false }
);
const Movies = mongoose.model("Movies", MoviesSchema);
export default Movies;
