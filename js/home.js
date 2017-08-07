window.onload = function(){
    var phonelist = document.createElement("script");
    phonelist.type="text/javascript";
    phonelist.src="http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X";
    document.body.appendChild(phonelist);
};
function X (data){
    var item = document.createElement('a');
    var image = document.createElement('img');
    var itemPrice = document.createElement('span');
    var paymentConditions = document.createElement('span');

    image.src= data["data"].reference.item.imageName;
    image.href= data["data"].reference.item.imageName;

    item.href= data["data"].reference.item.detailUrl;
    item.textContent = data["data"].reference.item.name;

    itemPrice.textContent =data["data"].reference.item.price;

    paymentConditions.innerHTML = data["data"].reference.item.productInfo.paymentConditions;

    document.getElementById("ref.item_img").appendChild(image);   
    document.getElementById("ref.item_name").appendChild(item);
    document.getElementById("ref.item_price").appendChild(itemPrice);
    document.getElementById("ref.item_payment_conditions").appendChild(paymentConditions);

    displayRecommendations(data);
}

function displayRecommendations(data){
    var aux=0;
    for(var item in data["data"].recommendation){
        var product = data["data"].recommendation[item];
        var li = document.createElement('il');
        li.className="box";
        li.id=item;
        document.getElementById('itens').appendChild(li);
        ProductElement(product, item);

    }
}
function ProductElement(product, liId){
    var productElement={};
    productElement.name= document.createElement('a');
    productElement.image = document.createElement('img');
    productElement.paymentConditions = document.createElement('span');
    productElement.price= document.createElement('span');

    productElement.name.href= product.detailUrl;
    productElement.name.textContent = product.name;
    productElement.name.className="text";
    productElement.image.src= product.imageName;
    productElement.paymentConditions.textContent = product.productInfo.paymentConditions;
    productElement.price.textContent = product.price;

    document.getElementById(liId).appendChild(productElement.image);
    document.getElementById(liId).appendChild(productElement.name);
    document.getElementById(liId).appendChild(productElement.price);
    return productElement;
}
var page=0;
function prev(){
    var itens = document.getElementById('itens');
    if(page < 0){
        page+=1000;
    }
    itens.style.transform= 'translateX('+page+'px)';
}
function next(){
    var itens = document.getElementById('itens');
    if(page <= 0){
        page-=1000;
    }
    console.log(page);
    itens.style.transform= 'translateX('+page+'px)';
}