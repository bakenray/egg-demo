'use strict';
const products = [
  {
    id: 1,
    name: '商品1',
    priceInCents: 11, // 分
  },
  {
    id: 2,
    name: '商品2',
    priceInCents: 12,
  },
  {
    id: 3,
    name: '商品3',
    priceInCents: 13,
  },
];
class ProductModel {
  async list() {
    return products;
  }
  async addOne(product) {
    if (!product.id || !product.name) {
      throw Error('invalid product');
    }
    products.push(product);
  }

  async getOneById(id) {
    const product = products.find(p => p.id === Number(id));
    return product;
  }
}
module.exports = ProductModel;
