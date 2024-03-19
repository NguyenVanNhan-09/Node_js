import categoriesRouter from "./categories.js";
import GenresRouter from "./genres.js";
import moviesRouter from "./movies.js";

export default function routes(app) {
   app.get("/", (req, res) => {
      res.send("Home");
   });
   app.use("/movies", moviesRouter);
   app.use("/categories", categoriesRouter);
   app.use("/genres", GenresRouter);
}
