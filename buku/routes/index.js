const routes = require("express").Router();
const mongoose = require("mongoose");

require("../MBuku");
const Buku = mongoose.model("Buku");

//routing for buku service
routes.get('/', (req, res) => {
    res.send("Service Buku.");
});

routes.post("/buku", (req, res) => {
    
    var req = req.body,
        newBuku = {
            judul: req.judul,
            penulis: req.penulis,
            jumlahHal: req.jumlahHal,
            publisher: req.publisher,
        },
        buku = new Buku(newBuku)
        ;

    buku.save()
        .then(() => {
            console.log("Buku baru berhasil ditambahkan.");
        })
        .catch((err) => {
            if(err)
            {
                throw err;
            }
        });

    res.send("Sukses menambahkan buku baru.");
});

routes.get("/buku", (req, resp) => {
    Buku.find()
    .then((buku) => {
        resp.json(buku);
    })
    .catch((err) => {
        if(err)
        {
            throw err;
        }
    });
});

routes.get("/buku/:id", (req, resp) => {
    Buku
        .findById(req.params.id)
        .then((buku) => {

            if ( buku ) {
                resp.json(buku);
            }else{
                resp.json({err: "Oops! Data not found"});
            }
        })
        .catch((err) => {
            if(err)
            {
                resp.json({err: "Oops! Something went wrong."});
            }
        });
});

module.exports = routes;