const Router = require("koa-router")
const router = new Router();
router.post('/v1/:id/classic/latest',async (ctx,next)=>{
    //header
    //body
    //获取参数的4种方式
    const path = ctx.params;
    const query = ctx.request.query;
    const header = ctx.request.header;
    //使用koa-bodyparser解析
    const body = ctx.request.body;
    ctx.body = {key:"classic"}
})
module.exports = router
