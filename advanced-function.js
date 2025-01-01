function save(){
    console.log(2+30);
}
save();
function runTwice(fun){
    fun();
}
runTwice(fun);
function fun(){
    console.log(5);
}
setTimeout(()=>{
    document.querySelector('.js-button-start').innerHTML='Finished!';
},2000);