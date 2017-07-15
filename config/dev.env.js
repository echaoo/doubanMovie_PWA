/**
 * @file 开发环境相关配置文件
 * @author echaoo(1299529160@qq.com)
 */

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
