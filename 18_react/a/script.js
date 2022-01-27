/*
function myFunc() {
	return (
		<div className="asd"><br>from the function</div>
	);
}

document.getElementById('log').innerHTML += myFunc();
*/

function myFunc() {
	return (
		'<div className="asd"><br>from the function</div>'
	);
}

document.getElementById('log').innerHTML += myFunc();