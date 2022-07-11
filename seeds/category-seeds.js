const { Category } = require("../models");
const categoryData = require("./categorySeedData.json");

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
