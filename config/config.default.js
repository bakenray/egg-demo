/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585103289823_1448';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.sequelize = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bakenray',
    password: 'lpqstrong',
    pool: {
      max: 10,
      min: 1,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
