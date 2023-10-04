/*
RESTFUL API

*/

const uuid = require("uuid");
const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Make sure to import the bcrypt library for password hashing
const app = express();
//connect to mysql

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3308",
  database: "NextDoorDB",
});
con.connect(function (err) {
  if (err) {
    console.log("[MySQL ERROR]", err);
  } else {
    console.log("Connected to MySQL");
  }
});

const corsOptions = {
  origin: "http://192.168.10.4:8081",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable set cookie
};

app.use(cors(corsOptions));

app.use(bodyparser.json()); //Accept json params
app.use(bodyparser.urlencoded({ extended: true })); //Accept URL Encoded params

app.post("/Signup/", async (req, res, next) => {
  var post_data = req.body;
  var uid = uuid.v4();
  var first_name = post_data.fname;
  var last_name = post_data.lname;
  var username = post_data.username;
  var email = post_data.email;
  var plaint_password = post_data.password;
  var confirm_password = post_data.confirm_password;
  var city = post_data.city;
  var mobilenumber = post_data.mobile_number;

  if (plaint_password !== confirm_password) {
    return res.status(400).json({ error: "Password do not match" });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plaint_password, saltRounds);
    const hashedConfirmPassword = await bcrypt.hash(
      confirm_password,
      saltRounds
    );
    con.query(
      "SELECT * FROM users WHERE email= ?",
      [email],
      async function (err, result, fields) {
        if (err) {
          console.log("[MySQL ERROR]", err);
          return res.json("Database error");
        }

        if (result && result.length) {
          return res.json("User already exists!!!");
        } else {
          con.query(
            "INSERT INTO users(unique_id, fname, lname, username, email, password, confirm_password, city, mobile_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              uid,
              first_name,
              last_name,
              username,
              email,
              hashedPassword,
              hashedConfirmPassword,
              city,
              mobilenumber,
            ],
            function (err, result, fields) {
              if (err) {
                console.log("[MySQL ERROR]", err);
                return res.json("Registration error");
              }
              return res.json("Registration successful");
            }
          );
        }
      }
    );
  } catch (hashError) {
    console.log("Bcrypt Hashing Error: ", hashError);
    return res.json("Hashing error during registration");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Query the database to retrieve the user by username
  con.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) {
        console.error("MySQL ERROR:", err);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "User not found" });
      }

      const user = results[0];
      const hashedPassword = user.password;

      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Hashed Password from DB:", hashedPassword);
      // Compare the provided password with the hashed password in the database
      try {
        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (isMatch) {
          // Passwords match, return user data (excluding the password)
          const userData = { ...user };
          delete userData.password;
          res.status(200).json(userData);
        } else {
          res.status(401).json({ error: "Wrong password" });
        }
      } catch (compareErr) {
        console.error("Password Comparison Error:", compareErr);
        return res.status(500).json({ error: "Password comparison error" });
      }
    }
  );
});

// app.get("/", (req, res, next) => {
//   console.log("Password: 123456");
//   var encrypt = hashPassword("123456");
//   console.log("Encrypt: " + encrypt.passwordHash);
//   console.log("Salt: " + encrypt.salt);
// });

app.listen(3000, () => {
  console.log("NextDoor Restful is running on 3000");
});
