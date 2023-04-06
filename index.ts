import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";

import { mainRoutes } from "./src/routes";

const app = express();
app.use(json());
app.use(mainRoutes);
console.log("process",process.env)
mongoose
  .connect(
    `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.w1wigmx.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database :)");
  })
  .catch((reason) => {
    console.log("Failed to connect to database :(", reason);
  });

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
