import express from "express";
import expressLayouts from "express-ejs-layouts";
import Config from "./config/config.js";
import db from "./config/mongoose.js";
import router from "./routes/index.js";

//intializing express app,setting up port
const app = express();
const port = Config.port;

//setting up app to use static files from assets folder and extract the form data and use express layouts
app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("view engine", "ejs");
app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//using routers for the app
app.use("/", router);

//make app listen to port
app.listen(port, function (err) {
  if (err) {
    console.log("port connecting error", err);
    return;
  }
  console.log("server is running on port :", port);
});