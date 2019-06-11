function fun1(){
    fun2();
}
async function fun2(){
    try{
       await fun3();
    }catch(error){
        console.log("error")
    }

}
function fun3(){
    return new Promise((resolve,reject) => {
        const r = Math.random();
        if(r < 0.5){
            reject("error");
        }
    })
    // setTimeout(function(){
    //     throw new Error("err")
    // },1000)
}
fun1();