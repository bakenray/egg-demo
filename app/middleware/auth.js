'use strict';

module.exports = opts => {
  console.log(opts);
  return async (ctx, next) => {
    const { userId } = ctx.request.body;
    const isValidUser = await ctx.service.user.isUserLogedIn(userId);
    if (!isValidUser) throw new Error('invalid user from auth middleware');
    await next();
  };
};
