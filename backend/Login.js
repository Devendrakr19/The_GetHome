const mongoose = require("mongoose");
const validator = require("validator");

const bycript = require("bcrypt");

const express = require("express");

const bodyparser = require("body-parser"); // to read the data

const cors = require("cors"); // server is allowing to connect with another server.

const app = express();

app.use(cors()); //Cross-Origin Resource Sharing

app.use(bodyparser.json()); // also available one method url encoded

mongoose
  .connect("mongodb+srv://rohitkafle360:c78QRZNGlj4zj7mf@cluster0.oafwy5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("successfully conneted");
  })
  .catch((e) => {
    console.log("failed to connect ", e);
  });

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  // gender: {
  //   type: String,
  //   // enum: ["Male", "Female", "Other"],
  //   required: true,
  // },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", userSchema);
const landord = mongoose.model("landord", userSchema);

// Signup....

app.post("/Home/Signup", async (req, res) => {
  try {
    let email = req.body.email;

    let Userdata = await user.findOne({ email });

    if (!Userdata) {
      let password = req.body.password;
      let c_password = req.body.confirmPassword;
      console.log(password, "  ", c_password);
      if (password === c_password) {
        let data = new user({
          fullName: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone,
          // gender: req.body.gender,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
        });
        console.log("data is saved");
        const doc = await data.save();

        console.log(doc);

        return res.json({ emailpassword: true, userEmail: email });
      } else {
        console.log("password does not match");
        return res.json({ passwordfalls: true });
      }
    } else {
      console.log("This is email is alread in use");

      return res.json({ emailexist: true });
    }
  } catch (error) {
    console.log("error is ", error);
    return res.json({ success: true });
  }
});

// Login

app.post("/Home/login", async (req, res) => {
  try {
    let email = req.body.email;

    let Userdata = await user.findOne({ email });

    if (Userdata) {
      if (Userdata.password === req.body.password) {
        res.json({ emailpassword: true });
      } else {
        res.json({ emailpassword: false });
      }
    } else {
      res.json({ emailpassword: false });
    }
  } catch (e) {
    console.log("You have an Eroor", e);
  }
});

// Landlord Signup..

app.post("/Home/Signuplandlod", async (req, res) => {
  try {
    let email = req.body.email;

    let Userdata = await landord.findOne({ email });

    if (!Userdata) {
      let password = req.body.password;
      let c_password = req.body.confirmPassword;
      console.log(password, "  ", c_password);
      if (password === c_password) {
        let data = new landord({
          fullName: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone,
          // gender: req.body.gender,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
        });
        console.log("data is saved");
        const doc = await data.save();

        console.log(doc);

        return res.json({ emailpassword: true, userEmail: email });
      } else {
        console.log("password does not match");
        return res.json({ passwordfalls: true });
      }
    } else {
      console.log("This is email is alread in use");

      return res.json({ emailexist: true });
    }
  } catch (error) {
    console.log("error is ", error);
    return res.json({ success: true });
  }
});

//landlord login

app.post("/Home/loginlandlord", async (req, res) => {
  try {
    
    let email = req.body.email;
    console.log(email);

    let Userdata = await landord.findOne({ email });
    console.log(Userdata);
    if (Userdata) {
      console.log(Userdata.password, " ", req.body.password);

      if (Userdata.password === req.body.password) {
        res.json({ emailpassword: true });
      } else {
        res.json({ emailpassword: false });
      }
    } else {
      res.json({ emailpassword: false });
    }
  } catch (e) {
    console.log("You have an Eroor", e);
  }
});

app.listen(80, () => {
  console.log("listinig to port not 80");
});
