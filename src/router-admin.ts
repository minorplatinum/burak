import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Quyida Router instancedan foydalanamiz va get post
//metodlarini amalga oshiramiz va APIlar hosil qilamiz

// router.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to HomePage");
// });
// router.get("/login", (req: Request, res: Response) => {
//   res.send("Welcome to LoginPage");
// });
// router.get("/signup", (req: Request, res: Response) => {
//   res.send("Welcome to SignUpPage");
// });

//Restaurant

routerAdmin.get("/", restaurantController.goHome);
// "/"dan kelgen requestni routerimiz membercontrollerning "/" methodiga junatyapti
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignUp)
  .post("/signup", restaurantController.processSignUp);

//Product
//User
export default routerAdmin;