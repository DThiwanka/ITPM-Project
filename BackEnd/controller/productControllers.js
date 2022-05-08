const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failure with retrieve all product"});
    }
}


const getProductById = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Failure with finding specific product"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};