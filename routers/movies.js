import router from "express";
import MoviesController from "../controllers/movies.js";
const moviesRouter = router();
const movieController = new MoviesController();
moviesRouter.get("/", movieController.getAllMovies);
moviesRouter.get("/:id", movieController.getDetailMovies);
moviesRouter.post("/", movieController.createMovie);
moviesRouter.put("/:id", movieController.updateMovie);
moviesRouter.delete("/:id", movieController.deleteMovie);

export default moviesRouter;
