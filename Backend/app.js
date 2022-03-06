const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/getNotes");

const cors = require("cors");
require("dotenv").config({ path: ".env" });

mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to successfully ");
    const app = express();
    app.use(express.json()); // Express doesn't know how to read the request body. So, we need to add a middleware to be able to parse them in every single request
    app.use(express.urlencoded());
    app.use(cors());
    app.use("/api", routes);

    app.listen(process.env.PORT || 8000, () => {
      console.log("listening ...");
    });
  });

mongoose.connection.on("error", (err) => {
  console.log("database" + err.message);
});
