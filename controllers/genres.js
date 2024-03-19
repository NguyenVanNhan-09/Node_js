import Genres from "../models/genres.js";
class GenresController {
   async getAllGenres(req, res) {
      try {
         const data = await Genres.find({});
         res.status(200).json({ message: "Get Done", data });
      } catch (error) {
         res.status(400).json({ message: "Get false" });
      }
   }
   async getDetailGenres(req, res) {
      try {
         const data = await Genres.findById(req.params.id);
         res.status(200).json({ message: "Get Done detail", data });
      } catch (error) {
         res.status(400).json({ message: "Get false" });
      }
   }
   async createGenre(req, res) {
      try {
         // const { data } = await Product.post("/products", req.body);
         const data = await Genres.create(req.body);
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
   async updateGenre(req, res) {
      try {
         const data = await Genres.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
         });
         res.status(200).json({ message: "update Done", data });
      } catch (error) {
         res.status(400).json({ message: "update false" });
      }
   }
   async deleteGenre(req, res) {
      try {
         const data = await Genres.findByIdAndDelete(req.params.id);
         res.status(200).json({ message: "delete Done", data });
      } catch (error) {
         res.status(400).json({ message: "delete false" });
      }
   }
}
export default GenresController;
