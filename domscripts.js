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