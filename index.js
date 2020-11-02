import path from "path";
import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.use(bodyParser.json());
//all routes are starting with /users
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("hello from Homepage"));

app.listen(3000, () => {
  console.log("Listening on port:http://localhost:3000");
});
