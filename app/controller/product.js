'use strict';

const { Controller } = require('egg');
const ProductModel = require('../model/product');
const productModel = new ProductModel();

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const products = await this.ctx.model.product.list();
    ctx.body = { products };
  }
  async getOneById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const product = await this.ctx.model.product.getOneById(id);
    ctx.body = { product };
  }
  async addOne() {
    const { ctx } = this;
    const { product } = ctx.request.body;
    await this.ctx.model.product.addOne(product);
    ctx.body = { product };
  }
}
module.exports = ProductController;
