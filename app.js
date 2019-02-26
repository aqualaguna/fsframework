const Koa = require('koa');
const koaRouter = require('koa-router');
// load global variable
require('loader/default');
// load config
global.conf = require('loader/config');
// load helper
require('loader/helper');
console.log(config)
console.log(config.env('custom.custom', 'test'));
const app = new Koa();
const router = new koaRouter();
app.config = global.conf;



router.get('koala', '/', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!";
});


app.use(router.routes())
  .use(router.allowedMethods())

module.exports = app;