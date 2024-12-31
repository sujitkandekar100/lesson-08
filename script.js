const product ={
    name:'baketball',
    price:25,
    'delivery-time':3
}
console.log(product.price);
product.price=30;
console.log(product.name);
console.log(product.price);
console.log(product['delivery-time']);
const product1={
    name:'football',
    price:30
}
function comparePrice(product,product1){
    if(product.price<product1.price)
    {
        console.log(product.price);
    }
    else{
        console.log(product1.price);
    }
}
comparePrice(product,product1);
function isSameProduct(product,product1){
    if(product.price===product1.price && product.name===product1.price){
        console.log(product.name+" "+product.price+" "+product1.name+" "+product1.price);

    }
    else{
        console.log("not same");
    }
}
isSameProduct(product,product1);