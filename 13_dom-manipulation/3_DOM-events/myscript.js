var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function addList(myEvent) {
	if (input.value.length === 0)
		return;
	
	//if (myEvent.keyCode === 13 || myEvent === button.click) {
	if (myEvent.keyCode === 13 || myEvent.target === button) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
}

button.addEventListener("click", addList);
input.addEventListener("keypress", addList);