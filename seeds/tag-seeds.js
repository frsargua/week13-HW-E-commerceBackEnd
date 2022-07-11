const { Tag } = require("../models");

const tagData = require("./tagSeedsData.json");

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
