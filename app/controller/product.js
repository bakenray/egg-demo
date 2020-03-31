'use strict';

const { Controller } = require('egg');

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const products = await this.ctx.model.Product.list();
    ctx.body = { products };
  }
  async getOneById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const product = await this.ctx.model.Product.getOneById(id);
    ctx.body = { product };
  }
  async addOne() {
    const { ctx } = this;
    const { product } = ctx.request.body;
    const created = await this.ctx.model.Product.addOne(product);
    ctx.body = { product: created };
  }
}
module.exports = ProductController;
