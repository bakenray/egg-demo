'use strict';

const { Controller } = require('egg');

class CartController extends Controller {

  async addProductToCart() {
    const { ctx } = this;
    const { userId, productId, amount } = ctx.request.body;
    const isUserInBlackList = await ctx.service.user.isUserInBlackList(userId);
    if (isUserInBlackList) throw new Error('user is banned!');
    const cart = await ctx.model.cart.addProductToCart(userId, productId, amount);
    ctx.body = {
      cart,
    };
  }
  // 其他接口也要写上登录校验的内容
  // eslint-disable-next-line no-empty-function
  async removeProductFormCart() {
  }
  // eslint-disable-next-line no-empty-function
  async removeAllFromCart() {
  }
}
module.exports = CartController;
