'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsxOrder = sequelize.define('products_x_order', {
    quantidade: DataTypes.INTEGER

  }, {});

  ProductsxOrder.associate = function(models) {
    ProductsxOrder.belongsTo(moldels.Products)
    ProductsxOrder.belongsTo(moldels.Order)
  }
  return ProductsxOrder;
};