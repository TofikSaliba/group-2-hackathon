import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { usersRouter } from "./routes/users-routes.js";
import { scrapData } from "./scrapper/scrapper.js";
import { regionRouter } from "./routes/region-routes.js";
import { storyRouter } from "./routes/story.route.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../client/build");

app.use(express.static(publicPath));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/users", usersRouter);
app.use("/regions", regionRouter);
app.use("/stories", storyRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// scrapData();

export { app };
