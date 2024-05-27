const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/User");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user");

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Login Successful");
        } else {
          res.json("Invalid Credentials");
        }
      } else {
        res.json("user not found");
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3001, () => {
  console.log("server is running on the port 3001");
});
