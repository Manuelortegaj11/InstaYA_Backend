const mongoose = require("mongoose");
//mongodb+srv://proyectouninorte:<password>@cluster0.rfosq5q.mongodb.net/?retryWrites=true&w=majority
const db = async() => {
const MONGO_URL = "mongodb+srv:" + "//" + process.env.MONGODB_USERNAME + ":" + process.env.MONGODB_PASSWORD + "@cluster0.rfosq5q.mongodb.net/?retryWrites=true&w=majority";
  await mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB FUNCIONANDO"))
  .catch((error) => console.error(error));
}
module.exports = db;





