import { Router } from "express";
import User from "../models/user.js";

const router = Router();

//add new user to database
router.post("/user", async (req, res) => {
    try {
        const user = new User(req.body); 
        const newUser = await user.save();
        res.send({
            response: "User",
            newUser

        });
    } catch(error){
        console.log(console.error.message);
    }
});




export default router;


