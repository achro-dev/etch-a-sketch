const gridHolder = document.getElementById("gridHolder");

let gridChoice = prompt("How many lines of grid? (max 100)")
gridHolder.style.cssText = "display: grid; grid-template-columns: repeat( " + gridChoice +", 25px [col-start]);"

for (let i = 1; i < (gridChoice * gridChoice) + 1; i++) {
   const gridObj = document.createElement("div");
   gridObj.classList.add("box");
   gridHolder.appendChild(gridObj);
}

gridHolder.addEventListener("mouseover", function(e) { // e = event object
    if (e.target && e.target.matches(".box")) {
      const choosedBox = e.target;
      choosedBox.classList.add("boxON");
    }
  });



