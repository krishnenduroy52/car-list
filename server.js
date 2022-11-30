require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

try {
    mongoose.connect("mongodb+srv://root:toor@cluster0.egix2vx.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Successfull");
} catch (err) {
    console.log("connection error");
}

app.use("/", require("./Routes/carRouter"));

app.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`);
});
