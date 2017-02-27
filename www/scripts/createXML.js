






angular.module('TaleCare.createXML', []).controller('SigninController', function ($scope,$http) {
	
	var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(1);
		myFunction(xhttp);
    }
};
xhttp.open("GET", "angularXML.xml", true);
xhttp.send();

function myFunction(xml) {




    var x, y, i, newElement, txt, xmlDoc;
    xmlDoc = xml.responseXML;
	console.dir(xmlDoc);
	//console.log(xmlDoc.getElementsByTagName("user").length);
    newElement = xmlDoc.createElement("user");
    x = xmlDoc.getElementsByTagName("user");
	
	//console.dir(xmlDoc.getElementsByTagName("registration"));
	xmlDoc.getElementsByTagName("registration")[0].appendChild(newElement);
	console.log(xmlDoc.getElementsByTagName("user").length);
	//xmlDoc.send("angularXML.xml");
	
	var fso = new ActiveXObject("Scripting.FileSystemObject");	
	if(fso.fileExists("angularXML.xml")){
		
	alert(10);
	}
	
	
	
	
    //x.appendChild(newElement);

   /* // Display all elements
    xlen = x.childNodes.length;
    y = x.firstChild;
    txt = "";
    for (i = 0; i < xlen; i++) {
        if (y.nodeType == 1) {
            txt += y.nodeName + "<br>";
        }
        y = y.nextSibling;
    }
    document.getElementById("demo").innerHTML = txt; */



}
	
});











