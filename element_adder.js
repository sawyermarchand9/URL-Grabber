//your failure now learn from it
// JavaScript Document
alert('if you go to click on the x for the modal you will notice its actually a tad above the x')
// JavaScript Document that will display content of discovery 
$('#modal').click(function(){
	$('.modal').css('display', 'none');
	
});


// create the element's
var modal = document.createElement("div");
var modalCont = document.createElement("div");
	modalCont.style.position = "relative";
var span = document.createElement("span");
	span.innerHTML = "&times;";
var par = document.createElement("p");
	par.style.position = "relative";
var ul = document.createElement("ul");
	ul.style.position = "relative";
var li = document.createElement("li");
	li.style.position = "relative";

// text nodes and id/classes
document.body.prepend(modal);
var textNode = document.createTextNode("");
var modalAtt = document.createAttribute("id");
modalAtt.value = "myModal";
var modalClass = document.createAttribute("class");
modalClass.value = "modal";
var modalContClass = document.createAttribute("class");
modalContClass.value = "modal-content";
var spanClose = document.createAttribute("class");
spanClose.value = "closebana";

// setting attributes
modal.appendChild(textNode);
modal.setAttributeNode(modalAtt);
modal.setAttributeNode(modalClass);
modalCont.setAttributeNode(modalContClass);
span.setAttributeNode(spanClose);

// appened elements together to form ultron! its only 11:53 geeze
modal.appendChild(modalCont);
modalCont.appendChild(span);
modalCont.appendChild(par);
modalCont.appendChild(ul);






// autobots rollout

var anchors = document.getElementsByTagName('a');
var hrefs = [];
//var controle = false;
for(var i=0; i < anchors.length; i++){
    hrefs.push(anchors[i].href);
}
// links array
console.log(hrefs.length);
for(var i=0; i<hrefs.length;i++){
	console.log(hrefs[i].innerHTML);
	//li.innerHTML = hrefs[i];
	ul.append(hrefs[i]+"\n\n\n");
	
}

// get all hrefs
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebana")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




