const express = require('express');
const router = express.Router();
const mainCar = require('../models/carModels')
router.route("/").get((req, res) => {
    res.send("Welcome to Car-list backend");
})
router.route("/car/list").get((req, res) => {
    mainCar.find().then((foundcar) => {
        res.json(foundcar);
    })
})

router.route("/car/sell").post(async (req, res) => {
    const date = req.body.date;
    const car_name = req.body.car_name;
    const carImg = req.body.carImg;
    const mileage = req.body.mileage;
    const location = req.body.location;
    const engine = req.body.engine;
    const transmission = req.body.transmission;
    const price = req.body.price;


    const newCar = new mainCar({
        date,
        car_name,
        carImg,
        mileage,
        location,
        engine,
        transmission,
        price,
    })
    console.log(newCar);
    await newCar.save()
})

module.exports = router