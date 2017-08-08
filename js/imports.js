var getImport= document.querySelector('#template1');
var content = getImport.import.querySelector('#item');
document.body.appendChild(document.importNode(content, true));