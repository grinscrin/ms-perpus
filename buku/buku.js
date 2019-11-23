const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

//middleware
app
    .use(bodyParser.json())
    .use("/", routes);

//connect to mongoDB
let mongooseConnOptions = { useNewUrlParser: true, useUnifiedTopology: true };
let dbUri = "mongodb+srv://grinscrin:R3WiGkjK5s4hfwEH@perpus-yukyv.mongodb.net/bukuservice";
mongoose.connect(dbUri, mongooseConnOptions, () => {
    console.log("Database server sudah terhubung.");
});

//running server 
app.listen(6969, () => {
    console.log("Service Buku sedang berjalan pada port: 6969");
})