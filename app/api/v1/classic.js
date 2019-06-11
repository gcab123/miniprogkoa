const Router = require("koa-router")
const router = new Router();
const { httpException,ParameterException } = require("../../../core/httpException")
router.post('/v1/:id/classic/latest',async (ctx,next)=>{
    //header
    //body
    //获取参数的4种方式
    const path = ctx.params;
    const query = ctx.request.query;
    const header = ctx.request.header;
    //使用koa-bodyparser解析
    const body = ctx.request.body;
    if(true){
        // const error = new httpException("为什么错误",10001,400);
        const error = new ParameterException()
        // const error = new Error("错误信息");
        // error.errorCode = 10001;
        // error.status = 400;
        // error.requestUrl = `${ctx.method} ${ctx.path}`
        throw error;
    }
    ctx.body = {key:"classic"}
    
})
module.exports = router
