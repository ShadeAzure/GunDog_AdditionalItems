// 表示
window.onload = function(){
    console.log("wow");
    getCsvData('./db/items.csv');
    let data1 = jsyaml.load();
}
function getCsvData(dataPath) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
     const response = event.target.responseText;
     outputElement.innerHTML = response;
    });
    request.open('GET', dataPath, true);
    request.send();
}
const outputElement = document.getElementById('output_csv');

$(document).ready(function () {
    /* chromeでは使えない手法
        $.getJSON("./db/items.json", function(dataList){
        console.log("start");
        for(var i in dataList){
            console.log(dataList);
        }
    });*/
});

var yamlList = '';