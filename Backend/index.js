import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(`Error connecting to DB ${err}`);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User does not exist" });
    }
  });
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully Registered" });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen("8800", () => {
  console.log("Server is running on port 8800");
});
