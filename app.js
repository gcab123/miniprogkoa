//dev分支
const Koa = require("koa");
const parser = require("koa-bodyparser")
const InitManager = require("./core/init")
const catchError = require("./middlewares/exception")
const app = new Koa();

//最外层调用
app.use(catchError);

app.use(parser())

InitManager.initCore(app);

// app.use(book.routes())
// app.use(classic.routes())


//上一章的知识点
// app.use(async (ctx,next) =>{
//     const method =ctx.method;
//     if(method == 'GET' && ctx.path == "/classic/latest"){
//         ctx.body = {key:"hello"}
//     }
//     const result = next();//调用第二个中间件函数，有返回结果
//     // await 求值表达式 阻塞
//     console.log(result)
// }
// );

// app.use(async (ctx,next) =>{
//     // const axios = require("axios");
//     // const res = await axios.get("http://7yue.pro");
// }
// );

app.listen(3000);