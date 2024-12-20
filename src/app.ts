import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// 1 - Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

// 2 - Sessions
// 3 - Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4- Routers
app.use("/admin", routerAdmin); // EJS
app.use("/", router); // SSR

export default app;