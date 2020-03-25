'use strict';

const {Controller} = require('egg');
const products = [];
class ProductController extends Controller{
    async index(){
        const {ctx} = this;
        ctx.body = {products}
    }
    async getOneById(){
        const {ctx} = this;
        const {id} = ctx.query;
        const product = products.find(p=>p.id === Number(id));
        ctx.body = {product};
    }
    async addOne(){
        const {ctx} = this;
        const {product} = ctx.request.body;
        if(product) products.push(product);
        ctx.body = {product};
    }

}
module.exports = ProductController;