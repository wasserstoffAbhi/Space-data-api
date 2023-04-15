import * as dotenv from "dotenv";

dotenv.config();

export default class Config {
  static port= process.env.PORT;
  static mongooseUrl=process.env.MONGO_URL
};