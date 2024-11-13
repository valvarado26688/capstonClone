import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
},


});

export default model("User", userSchema);