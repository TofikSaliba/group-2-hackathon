import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@tofik.x4r2a7e.mongodb.net/hackathon?retryWrites=true&w=majority`,
  (error, mongoConnectionInstance) => {
    if (error) throw Error("Mongoose Connection!!, Error: " + error);
    if (!process.env.NODE_ENV) {
      const { host, port, name } = mongoConnectionInstance;
      console.log({ host, port, name });
    }
  }
);
