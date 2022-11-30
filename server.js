const express = require('express')
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

app.use(cors());
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_DB)
    console.log("Successfull")
} catch (err) {
    console.log("connection error")
}

app.use("/", require('./Routes/carRouter'))

app.listen(process.env.PORT, () => {
    console.log(`PORT ${process.env.PORT}`)
})