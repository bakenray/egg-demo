'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

module.exports.security = {
  csrf: {
    enable: false,
  },
};

module.exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};
