const { httpException,ParameterException } = require("../core/httpException")
const catchError = async (ctx,next) =>{
    try {
        await next();
    } catch (error) {
        //error调用堆栈信息
        //http status code
        //message
        //error_code,详细信息，用户自定义
        //request_url
        if(error instanceof ParameterException)
        {
            ctx.body ={
                message:error.msg,
                errorCode:error.errorCode,
                requestUrl:`${ctx.method} ${ctx.path}`
            }
            
            ctx.status = error.code;
        }

    }
}
 module.exports = catchError;