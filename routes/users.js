const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/registration.js");
require("../models/uFarmerReg.js");

const FarmerOne = mongoose.model("FarmerOne");
const UrbanFarmer = mongoose.model("UrbanFarmer");

//add router for registaring farmerOne
router.get("/regFarmerOne", (req, res) => {
  res.render("regFarmerOne", { title: "FarmerOne registration" });
});

router.get("/regUrbanFarmer", (req, res) => {
  res.render("regUrbanFarmer", { title: "Urban Farmer registration" });
});

//post the data from the regFarmerOne form to the DB
router.post("/regFarmerOne", (req, res) => {
  console.log(req.body);
  const farmerOne = new FarmerOne(req.body);
  farmerOne
    .save()
    .then(() => {
      res.redirect("/users/farmerOnes");
    })
    .catch((err) => {
      console.log(err);
      res.send("sorry something went wrong.");
    });
});

//after importing "/users" then navigate to "/"
router.get("/farmerOnes", (req, res) => {
  FarmerOne.find()
    .then((farmerOne) => {
      res.render("farmerOnes", { title: "Ufarm Farmer Ones ", farmerOne });
    })
    .catch(() => {
      res.send("sorry something went wrong");
    });
});

//post the data from the regUrbanFarmer form to the DB
router.post("/regUrbanFarmer", (req, res) => {
  console.log(req.body);
  const urbanFarmer = new UrbanFarmer(req.body);
  urbanFarmer
    .save()
    .then(() => {
      res.redirect("/users/urbanFarmers");
    })
    .catch((err) => {
      console.log(err);
      res.send("sorry something went wrong.");
    });
});

//after importing "/users" then navigate to "/"
router.get("/urbanFarmers", (req, res) => {
  UrbanFarmer.find()
    .then((urbanFarmer) => {
      res.render("urbanFarmers", {
        title: "Ufarm Urban Farmers ",
        urbanFarmer,
      });
    })
    .catch(() => {
      res.send("sorry something went wrong");
    });
});

router.get("/update/:id", async (req, res) => {
  try {
    const updateUser = await FarmerOne.findOne({ _id: req.params.id });
    res.render("updateFO", { farmer: updateUser });
  } catch (err) {
    res.status(400).send("Unable to find farmerOne in the database");
  }
});

router.post("/update", async (req, res) => {
  try {
    await FarmerOne.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("farmerOnes");
  } catch (err) {
    res.status(404).send("Unable to update farmerOne in the database");
  }
});

module.exports = router;
