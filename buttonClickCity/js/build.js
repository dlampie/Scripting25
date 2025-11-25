//console log just to test that your JS is linked properly
console.log("JS linked");
//create a variable for the number of buildings in the city and start it at zero
let numberofbuildings = 0;
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById("city").innerHTML = "Your city has " + numberofbuildings + " buildings.";
//Functions --
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
//-- Print a message to teh console
//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
//---Place an image graphic into the other div
// MAKE SURE INSIDE CURLY BRACKETS
function building1() {
  console.log("Building 1 button clicked");

  numberofbuildings++;
  document.getElementById("city").innerHTML = 
  "Your city has " + numberofbuildings + " buildings.";
  document.getElementById("cityGraphic").innerHTML +=
  "<img src='images/BuildingBlock1.png' alt='Building 1 ' class='img-fluid'>";
}

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function building2() {
  console.log("Building 2 button clicked");

  numberofbuildings++;
  document.getElementById("city").innerHTML = 
  "Your city has " + numberofbuildings + " buildings.";
  document.getElementById("cityGraphic").innerHTML +=
  "<img src='images/BuildingBlock2.png' alt='Building 2 ' class='img-fluid'>";
}

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
function building3() {
  console.log("Building 3 button clicked");
  numberofbuildings++;
  document.getElementById("city").innerHTML = 
  "Your city has " + numberofbuildings + " buildings.";
  document.getElementById("cityGraphic").innerHTML +=
  "<img src='images/BuildingBlock3.png' alt='Building 3 ' class='img-fluid'>";
}