const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser"); 
const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth");
const { connectToMongoDb } = require("./connect");
const urlroute = require("./routes/url");
const staticrouter = require("./routes/staticrouter");
const UserRoute = require("./routes/user");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/short_url").then(() =>
  console.log("Connected to MongoDB")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(cookieParser());
app.use("/url", restrictToLoggedinUserOnly, urlroute);

app.use("/user", UserRoute);
app.use("/", checkAuth, staticrouter);

// app.get("/url/test", async (req, res) => {
//   const allurls = await URL.find({});
//   return res.render('home', {
//     urls: allurls,
//   });
// });

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL); 
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
