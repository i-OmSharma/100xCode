require ('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

//AdminSchema
const AdminSchema = new mongoose.Schema({
  //
  username: String,
  password: String,
});

//UserSchema
const UserSchema = new mongoose.Schema({
  //
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

//CourseSchema
const CourseSchema = new mongoose.Schema({
  //
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
