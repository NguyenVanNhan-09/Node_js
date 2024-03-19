import Movies from "../models/movies.js";
class MoviesController {
   async getAllMovies(req, res) {
      try {
         const data = await Movies.find({});
         res.status(200).json({ message: "Get Done", data });
      } catch (error) {
         res.status(400).json({ message: "Get false" });
      }
   }
   async getDetailMovies(req, res) {
      try {
         const data = await Movies.findById(req.params.id);
         res.status(200).json({ message: "Get Done detail", data });
      } catch (error) {
         res.status(400).json({ message: "Get false" });
      }
   }
   async createMovie(req, res) {
      try {
         // const { data } = await Product.post("/products", req.body);
         const data = await Movies.create(req.body);
         console.log(req.body);
         console.log(data);
         if (!data) {
            return res.status(400).json({ message: "thêm sản phẩm thất bại" });
         }
         return res.status(200).json({
            message: "thêm sản phẩm thành công",
            data,
         });
      } catch (error) {
         res.status(400).json({
            name: error.name,
            message: error.message,
         });
      }
   }
   async updateMovie(req, res) {
      try {
         const data = await Movies.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
         });
         res.status(200).json({ message: "update Done", data });
      } catch (error) {
         res.status(400).json({ message: "update false" });
      }
   }
   async deleteMovie(req, res) {
      try {
         const data = await Movies.findByIdAndDelete(req.params.id);
         res.status(200).json({ message: "delete Done", data });
      } catch (error) {
         res.status(400).json({ message: "delete false" });
      }
   }
}
export default MoviesController;
