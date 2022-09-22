var express = require("express");
var router = express.Router();

var ProductModel = require("../models/ProductModel.js");

//register
router.post("/create", function (req, res) {
  //  console.log(req.body.firstname)
  // console.log(req.body.lastname)
  // console.log(req.body.email)


  var newDocument = {
    "brand": req.body.brand,
    "model": req.body.model,
    "price": req.body.price,
    "availability":req.body.availability,

  };


    ProductModel
        .create(newDocument)
        .then(
            function (dbDocument) {
                res.json(dbDocument);
        })
        .catch(
            function (dbError) {
            console.log(dbError);
            res.send("Error ocurred /products/create");
        });
});

module.exports = router;
