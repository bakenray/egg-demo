'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const userId = await ctx.service.user.login(username, password);
    // 简化版登录凭证，真实项目这样做不好
    ctx.body = {
      userId,
    };
  }
}

module.exports = UserController;
