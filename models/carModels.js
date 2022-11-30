const mongoose = require('mongoose');
const carSchema = {
    car_name: String,
    date: String,
    carImg: String,
    mileage: String,
    location: String,
    engine: String,
    transmission: String,
    price: String,
}

const mainCar = mongoose.model("mainCar", carSchema)

module.exports = mainCar;