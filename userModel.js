const mongoose = require("mongoose");
const userLoginSchema = new mongoose.Schema({
  user_id: String,
  password: String,
});

const Todo = mongoose.model("userLogin", userLoginSchema);
module.exports = userLoginSchema;
