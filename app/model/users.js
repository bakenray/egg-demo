'use strict';


const users = [
  {
    id: 1,
    username: 'bakernay',
    password: '123456',
  },
  {
    id: 2,
    username: 'weixiaoting',
    password: '123456',
  },
];
class UserModel {
  async list() {
    return users;
  }
  async addOne(user) {
    if (!user.id || !user.name) {
      throw Error('invalid user');
    }
    users.push(user);
  }

  async getOneById(id) {
    const user = users.find(p => p.id === Number(id));
    return user;
  }

  async login(username, password) {
    const user = users.find(u => u.password === password && u.username === username);
    return user;
  }
  async isUserIdValid(userId) {
    const user = await this.getOneById(userId);
    return !!user;
  }

}
module.exports = UserModel;
