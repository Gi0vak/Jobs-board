const express = require("express");

const PORT = 8000;

const app = express();

const router = require("./router");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
