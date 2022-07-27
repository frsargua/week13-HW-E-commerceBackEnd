// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Categories have many Products
Category.hasMany(Product, {
  onDelete: "CASCADE",
});

// Products belongsTo Category
Product.belongsTo(Category);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, uniqueKey: false });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, uniqueKey: false });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
