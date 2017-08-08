window.onload = function(){
    var phonelist = document.createElement("script");
    phonelist.type="text/javascript";
    phonelist.src="json/challenge.json?callback=X";
    document.body.appendChild(phonelist);
};

function X (data){
    importTemplate("#refProduct","#product");
    replaceContent(data["data"].reference.item,"referenceProduct");

    importTemplate("#recProduct", "#recommended");
    replaceRecommendations(data["data"].recommendation, "itens")
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