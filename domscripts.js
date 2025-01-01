console.log(document.querySelector('button'));
document.querySelector('.button-9a').innerHTML="9b done";
const headButton=document.querySelector('.js-button-head');
const tailButton=document.querySelector('.js-button-tails');
const paraGraph=document.querySelector('.js-paragraph');
headButton.addEventListener('click',()=>{
          paraGraph.innerHTML='You Choose: Head';
})
tailButton.addEventListener('click',()=>{
    paraGraph.innerHTML='You Choose: Tails';
})
const inputName=document.querySelector('.js-input-name');
const submitButton=document.querySelector('.js-button-submit');
const paraGraphName=document.querySelector('.js-paragraph-name');
function showName(){
    let name=inputName.value;
    paraGraphName.innerHTML=`Your Name is : ${name}`;
}
submitButton.addEventListener('click',
    showName
)
inputName.addEventListener('Keydown',(event)=>{
    if(event.key==='Enter'){
        showName();
    }
    
})