const express = require('express');
const app = express();


//routing for buku service
app.get('/', (req, res) => {
    res.send("Service Buku.");
});

//running server 
app.listen(6969, () => {
    console.log("Service Buku sedang berjalan.");
})