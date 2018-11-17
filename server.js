const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport.js")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <form action="/entry" method="POST">
      <div>
        <label for="message">Enter a message</label>
        <input id="message" name="message" type="text" />
      </div>
      <input type="submit" value="Submit" />
      <input type="hidden" name="_csrf" value="${req.csrfToken()}" />
    </form>
  `);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
