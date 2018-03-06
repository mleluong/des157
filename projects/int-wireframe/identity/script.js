/*console.log('reading js');
'use strict';

//capture the submit event
document.f.onsubmit=processForm;

function processForm(){
  console.log('process');


  //write messages for reflection page
  myMsg.innerHTML="You chose: "+race;

}
*/

console.log("reading");
"use strict";

//store answers in variables
var question1 = document.f.question1.value;

//capture the submit event
document.f.onsubmit = processForm;

//define process function
function processForm() {
  console.log('process');
  var race = document.getElementById("#race");
  var gender = document.getElementById("#gender");
  var sexuality = document.getElementById("#sexuality");

  myMsg.innerHTML = "You answered: " + race;
}
