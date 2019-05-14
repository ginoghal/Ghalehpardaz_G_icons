() => {
  //stub
  console.log('fired!');

  //select elements with Javacscript

  //setting up a variable using the let keyword,
  // and using a CSS selector to find the element we want to use.

  //let stores the reference to element asa a variable (in memory)

  let svgGraphic = document.querySelector("#badgeSVG");

  // functions are reusable pieces of code
  //that you can run at any time

  function logMyID(){
    console.log(this.id);
  }

    this.style.opacity=0.5%;

svgGraphic.addEventListener("click", logMyID);

})();
