const { ProductTag } = require("../models");

const productTagData = require("./productTagSeedData.json");

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
