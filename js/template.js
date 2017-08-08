function replaceContent(dataObject, placeholderId){
    var template= document.getElementById("product").innerHTML;
    var templateHtml="";
    
    templateHtml += template.replace(/{{productId}}/g, dataObject.businessId)
    .replace(/{{productImage}}/g,dataObject.imageName)
    .replace(/{{productName}}/g, dataObject.name)
    .replace(/{{productPrice}}/g, dataObject.price)
    .replace(/{{productOldPrice}}/g, dataObject.oldPrice)
    .replace(/{{productPriceConditions}}/g, dataObject.productInfo.paymentConditions)
    .replace(/{{productDetail}}/g, dataObject.detailUrl);
    document.getElementById(placeholderId).innerHTML = templateHtml;
}
function replaceRecommendations(dataObject, placeholderId){
    var template= document.getElementById("recommended").innerHTML;
    var templateHtml="";
    
    for(var item in dataObject){
        var invisible="";
        if(dataObject[item].oldPrice == null){
            invisible="style='display:none'";
        }
        templateHtml += template.replace(/{{index}}/g, item).replace(/{{productImage}}/g,dataObject[item].imageName)
        .replace(/{{productName}}/g, dataObject[item].name)
        .replace(/{{productPrice}}/g, dataObject[item].price)
        .replace(/{{productOldPrice}}/g, dataObject[item].oldPrice)
        .replace(/{{productPriceConditions}}/g, dataObject[item].productInfo.paymentConditions)
        .replace(/{{productDetail}}/g, dataObject[item].detailUrl).replace(/{{isNull}}/g,invisible);
        document.getElementById(placeholderId).innerHTML = templateHtml;
    }
}
function importTemplate(templateId, placeHolderId){
    var getImport= document.querySelector(templateId);
    var content=getImport.import.querySelector(placeHolderId);
    document.body.appendChild(document.importNode(content, true));
}