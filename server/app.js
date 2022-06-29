import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { usersRouter } from "./routes/users-routes.js";
import "./scrapper/scrapper.js";

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

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export { app };
