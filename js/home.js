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
    var oldPrice = document.createElement('span');

    image.src= data["data"].reference.item.imageName;
    image.href= data["data"].reference.item.imageName;

    item.href= data["data"].reference.item.detailUrl;
    item.textContent = data["data"].reference.item.name;
    itemPrice.textContent = data["data"].reference.item.price;
    paymentConditions.innerHTML = data["data"].reference.item.productInfo.paymentConditions;
    document.getElementById("ref.item_img").appendChild(image);   
    document.getElementById("ref.item_name").appendChild(item);
    document.getElementById("ref.item_price").appendChild(itemPrice);
    document.getElementById("ref.item_payment_conditions").appendChild(paymentConditions);
    if(data["data"].reference.item.oldPrice!=null){
        oldPrice.textContent = data["data"].reference.item.oldPrice;
        document.getElementById("ref.oldprice").appendChild(oldPrice);       
    }

    displayRecommendations(data);
}

function displayRecommendations(data){
    var aux=0;
    for(var item in data["data"].recommendation){
        var product = data["data"].recommendation[item];
        var li = document.createElement('li');
        li.className="box";
        li.id=item;
        li.addEventListener("click", function(){
            location.assign(product.detailUrl);
        });
        li.classList.add("hover");
        document.getElementById('itens').appendChild(li);
        ProductElement(product, item);

    }
}


function ProductElement(product, liId){
    var productElement={};
    productElement.name= document.createElement('span');
    productElement.image = document.createElement('img');
    productElement.paymentConditions = document.createElement('span');
    productElement.price= document.createElement('span');
    productElement.oldPrice = document.createElement('span');

    productElement.name.textContent = product.name;
    productElement.name.className="name";
    productElement.image.src= product.imageName;
    
    productElement.paymentConditions.innerHTML = product.productInfo.paymentConditions+ "<br> sem juros";
    productElement.price.textContent=product.price;
    productElement.price.className="price promo";
    productElement.paymentConditions.className="price promo";


    document.getElementById(liId).appendChild(productElement.image);
    document.getElementById(liId).appendChild(productElement.name);
    if(product.oldPrice != null){ 
        productElement.oldPrice.textContent = "De: "+product.oldPrice;
        productElement.oldPrice.className= "price";
        document.getElementById(liId).appendChild(productElement.oldPrice);
        document.getElementById(liId).appendChild(document.createElement('br'));

    }
    document.getElementById(liId).appendChild(productElement.price);
    document.getElementById(liId).appendChild(document.createElement('br'));
    document.getElementById(liId).appendChild(productElement.paymentConditions);
    

    return productElement;
}
var page=0;
function prev(){
    var itens = document.getElementById('itens');
    var button = document.getElementById("prev_item");

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