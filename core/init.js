const requireDirectory = require("require-directory")
const Router = require("koa-router")

class InitManager{
    static initLoadRouters(app){
        const apiDirectory = `${process.cwd()}/app/api`;
        requireDirectory(module,apiDirectory,{visit:whenLoadModule})

        function whenLoadModule(obj){
            if(obj instanceof Router){
                app.use(obj.routes());
            }
        }
    }
}
module.exports = InitManager