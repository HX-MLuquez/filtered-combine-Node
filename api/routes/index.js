const express = require("express");
const router = express.Router();
const { getProducts, getFilteredProducts } = require("../controllers/index");


router.get("/", (req,res)=>{
    res.status(200).json({message:"FILTERED CHALLENGE"})
});
router.get("/products", getProducts);
router.get("/products/filtered", getFilteredProducts);

module.exports = router;
