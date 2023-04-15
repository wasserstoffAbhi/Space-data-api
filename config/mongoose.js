import mongoose from "mongoose";
import Config from "./config.js";

mongoose.connect(Config.mongooseUrl);

const db=mongoose.connection;

db.once("open",()=>{
  console.log("COnnected to DB");
})

db.on("error",(err)=>{
  console.log(err)
});

export default db;