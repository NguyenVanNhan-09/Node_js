import router from "express";
import GenresController from "../controllers/genres.js";
const GenresRouter = router();
const genresController = new GenresController();
GenresRouter.get("/", genresController.getAllGenres);
GenresRouter.get("/:id", genresController.getDetailGenres);
GenresRouter.post("/", genresController.createGenre);
GenresRouter.put("/:id", genresController.updateGenre);
GenresRouter.delete("/:id", genresController.deleteGenre);
export default GenresRouter;