//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.js");
const Ufarm = require("./routes/index.js");
const login = require("./routes/loginRoutes.js");

require("dotenv").config();
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

//create express app
const app = express();

//set pug as the veiw engine for the app
app.set("view engine", "pug");
app.set("views", "./views");

//middleware
app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

/*  PASSPORT SETUP  */
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
//all routes on the home root"/"
app.use("/", Ufarm);
//all routes on the users' root "/users"
app.use("/users", usersRoutes);

app.use("/login", login);

//connect database
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//Error page incase of accessing a wrong route
app.get("*", (req, res) => {
  res.status(404).render("errorpage.pug");
});

//app runs on port http://localhost:3000
app.listen(3000, () => {
  console.log("Listening on port:http://localhost:3000");
});
