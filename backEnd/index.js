import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import testRoute from "./routes/testRoute.js"


//Express boiler plate
const app = express();
app.use(express.json());

//Routers
app.use(testRoute);


app.listen(process.env.PORT, () => {
    console.log(`App is now listening on port' ${process.env.PORT}.`)
});

//MongoDB boilerplate
mongoose.connect(process.env.MONGODB_CONNECTION_URL);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("Databse is connected")
})