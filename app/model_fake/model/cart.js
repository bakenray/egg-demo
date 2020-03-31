'use strict';
const carts = [
  // {
  //   id: 1,
  //   userId: 1,
  //   products: [
  //     {
  //       productId: 1,
  //       amount: 2,
  //     },
  //   ],
  // },
];
class cartModel {
  async list() {
    return carts;
  }
  // 获取某个用户的购物车
  async getOneByUserId(userId) {
    const found = carts.find(c => c.userId === Number(userId));
    if (found) return found;
    const newCart = {
      userId,
      products: [],
    };
    carts.push(newCart);
    return newCart;
  }
  // 加入购物车
  async addProductToCart(userId, productId, amount) {
    const cart = await this.getOneByUserId(userId);
    const found = cart.products.find(p => p.productId === Number(productId));
    if (found) {
      found.amount += amount;
    } else {
      cart.products.push({
        productId,
        amount,
      });
    }
    return cart;
  }
  // 移出购物车
  async removeProductToCart(userId, productId) {
    const cart = await this.getOneByUserId(userId);
    const index = cart.products.findIndex(p => p.productId === Number(productId));
    if (index > -1) {
      cart.products.splice(index, 1);
    }
  }
  async addOne(cart) {
    if (!cart.id || !cart.name) {
      throw Error('invalid cart');
    }
    carts.push(cart);
  }

  async getOneById(id) {
    const cart = carts.find(p => p.id === Number(id));
    return cart;
  }

  async login(cartname, password) {
    const cart = carts.find(u => u.password === password && u.cartname === cartname);
    return cart;
  }

}
module.exports = cartModel;
