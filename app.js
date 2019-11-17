const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const passport = require("passport");
const app = express();

mongoose
    .connect(db, { userNewUrlParse: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.get("/", (req, res) => {
    const user = new User({
        handle: "justin",
        email: "justin@gmail.com",
        password: "password"
    })
    user.save();
    res.send("user created!");
});



app.get("/", (req, res) => res.send("Test Hello World"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));