const { Product } = require("../models");

const productData = require("./product-seedsSeedData.json");

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
