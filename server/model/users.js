const mongoose = require("mongoose");

//creating the schema and model for storing
const usersSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    gender: { type: String, required: true },
    qrCodeUrl:{type:String},
    profilePhoto: { type: String, required: true },
    coverPhoto: { type: String, required: true },
    country: { type: String, required: true },
    bio: { type: String, required: true },
    password: { type: String, required: true },
    qrCode: { type: String},
    token: { type: String }
  },
  { timestamps: true }
);
const usersData = mongoose.model("Users", usersSchema);

module.exports = usersData;
