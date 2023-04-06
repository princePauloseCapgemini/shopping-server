import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";

import { mainRoutes } from "./src/routes";

const app = express();
app.use(json());
app.use(mainRoutes);

mongoose.connect(
  "mongodb://localhost:27017/shopping-portal",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
