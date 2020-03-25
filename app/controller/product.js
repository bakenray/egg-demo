'use strict';

const {Controller} = require('egg');
const products = [];
class ProductController extends Controller{
    async index(){
        const {ctx} = this;
        ctx.body = {products}
    }
}
module.exports = ProductController;