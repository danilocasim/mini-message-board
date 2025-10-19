require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT;
const assetsPath = path.join(__dirname, "/public");
app.use(express.static(assetsPath));
const indexRouter = require("./routes/indexRoutes");
const newMessageRouter = require("./routes/newMessagerRoutes");
const viewMessageRouter = require("./routes/viewMessageRoutes");
const notFoundRouter = require("./routes/notFoundRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", viewMessageRouter);
// app.use("/*splat", notFoundRouter);

app.listen(PORT, () => {
  console.log("Listening at PORT:", PORT);
});
