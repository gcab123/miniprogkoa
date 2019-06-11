
class httpException extends Error{
    constructor(msg="服务器错误",errorCode=10001,code=400){
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = code;
    }
}
class ParameterException extends httpException{
    constructor(msg,errorCode){
        super()
        this.msg = msg || "参数错误"
        this.errorCode = errorCode || 10000;
        this.code = 400;
    }
}
module.exports = {
    httpException,
    ParameterException 
}