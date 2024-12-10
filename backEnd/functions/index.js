import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
// import testRoute from "./routes/testRoute.js"
import inventoryRoute from "../routes/inventoryRoute.js";
import cors from "cors";
import ServerlessHttp from "serverless-http";

//Express boiler plate
const app = express();
app.use(express.json());
app.use(cors());

//Routers
app.use(inventoryRoute);

app.listen(process.env.PORT, () => {
    console.log(`App is now listening on port' ${process.env.PORT}.`);
});

//MongoDB boilerplate
mongoose.connect(process.env.MONGODB_CONNECTION_URL);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("Database is connected");
});

app.get("/.netlify/functions/index", (req, res) => {
    return res.json({
        virus: "this is the super virus 9000"
    });
});
const handler = ServerlessHttp(app);
module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}