'use strict';

const { Service } = require('egg');

class User extends Service {
  async isUserInBlackList(userId) {
    console.log(userId);
    return true;
  }
  async login(username, password) {
    const user = await this.ctx.model.users.login(username, password);
    if (!user) throw new Error('invalid username and password');
    return user.id;
  }
  async isUserLogedIn(userId) {
    const isUserValid = await this.ctx.model.users.isUserIdValid(userId);
    return isUserValid;
  }
}
module.exports = User;
