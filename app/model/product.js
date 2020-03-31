'use strict';

const uuid = require('uuid/v4');

module.exports = app => {
  const { Sequelize } = app;
  const { UUID, STRING, INTEGER } = Sequelize;
  const Product = app.model.define('product', {
    id: {
      type: UUID,
      primaryKey: true,
    },
    name: {
      type: STRING,
    },
    priceInCents: {
      type: INTEGER,
      min: 0,
    },
  });
  Product.sync()
    .catch(e => {
      app.loggers.appLogger.error('error syncing sequelize model', {
        err: e,
        model: 'product',
      });
    });

  Product.list = async (query = { limit: 10, offset: 0 }) => {
    const { limit, offset } = query;
    const products = Product.findAll({
      limit,
      offset,
    });
    return products;
  };
  Product.addOne = async product => {
    const toCreate = Object.assign({}, product);
    toCreate.id = uuid();
    const created = Product.created(toCreate);
    return created;
  };
  Product.getOneById = async id => {
    const product = Product.findOne({
      where: {
        id,
      },
    });
    return product;
  };

  return Product;
};
