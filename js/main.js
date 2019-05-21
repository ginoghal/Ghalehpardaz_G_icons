(() =>{
	console.log('fired!');

	// select elements with javascript
	let svgGraphic = document.querySelector("#badgeSVG")
			mainHeadline = document.querySelector(".main-headline"),
			subHead = document.querySelector("#raster-vector h3"),
			swapTextButton = document.querySelector(".switch-type");

	// let svggraphic is finding badgesvg and linking it to the id. (pretty much the same as an id )
	// let is a variable and const is a variable that doesnt change.

	//let stores the reference to element as a variable (in memory)

	//functions are reusable pieces of code.
	// that you can run any time
	function logMyId() {
		console.log(this.id);

this.style.opacity = 0.5;
}

function swapText() {
	mainHeadline.textContent = "Now you're something else!";
	mainHeadline.classList.add("selected");

	subHead.textContent = "You are also something else!";
	subHead.classList.add("selected");
}

// events always go down here
	svgGraphic.addEventListener("click", logMyId);
	swapTextButton.addEventListener("click",swapText);
})();
