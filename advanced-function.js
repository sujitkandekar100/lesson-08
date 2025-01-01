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
const addButton=document.querySelector('.js-button-add-to-cart');
addButton.addEventListener('click',()=>{
    const message=document.querySelector('.js-paragraph-added-message');
    message.classList.add('css-added-message-show');
    setTimeout(()=>{
        message.classList.remove('css-added-message-show');
    },2000);
})