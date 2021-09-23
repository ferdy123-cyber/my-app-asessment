const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const { sequelize } = require("./database/models");

const userRouter = require("./routes/user");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/", userRouter);

sequelize.authenticate().then(() => {
    console.log("success connect database");
});

// const getIdx = (arr, sum) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) return [i, j];
//         }
//     }
// };
// console.log(getIdx([2, 6, 16, 19], 8));

app.use((error, req, res, next) => {
    return res.status(400).send({
        status: "error",
        code: 400,
        message: "Bad Request",
        error: error.message,
    });
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});