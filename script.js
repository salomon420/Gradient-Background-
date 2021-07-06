var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
	let xyGradient ="linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	body.style.background = xyGradient;
	btn.style.background = xyGradient;
	

	css.textContent = xyGradient + ";";
}

window.onload = setGradient();

// function for random values
// (1<<24) === 16777216   is using binary to translane into hex somehow
// If you want you can look up how to convert from hex to decimal.
function getRandomGradient() {
	let randomColor1 = '#'+ Math.floor((Math.random()*(1<<24)|0)).toString(16);
	let randomColor2 = '#'+Math.floor((Math.random()*(1<<24)|0)).toString(16);

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient();
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click",getRandomGradient);