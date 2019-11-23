const mongoose = require("mongoose");

mongoose.model("Buku", {
    judul:{
        type: String,
        require: true
    },
    penulis:{
        type: String,
        require: true
    },
    jumlahHal:{
        type: Number,
        require: false
    },
    publisher:{
        type: String,
        require: false
    }
});