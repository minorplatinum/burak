import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";


mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection is successful");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.info(`Our project is succesfully run in port: ${PORT}!`);
            console.info(`Admin roject on http://localhost:${PORT}/admin \n`);
        });
    })
    .catch((err) => console.log("Error on the connection with MongoDB!", err));
    