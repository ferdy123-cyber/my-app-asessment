const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const { sequelize } = require("./database/models");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

sequelize.authenticate().then(() => {
    console.log("success connect database");
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});