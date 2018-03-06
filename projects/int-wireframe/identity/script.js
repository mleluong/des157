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

//var f = document.getElementById('form');

//capture the submit event
document.f1.onsubmit = processForm;
var reflection = document.getElementById("reflection");

//define process function
function processForm() {
  console.log('process');

  //variables for question 1
  var race1 = document.getElementById("#race1");
  var gender1 = document.getElementById("#gender1");
  var sexuality1 = document.getElementById("#sexuality1");
  var age1 = document.getElementById("#age1");
  var ability1 = document.getElementById("#ability1");
  var income1 = document.getElementById("#income1");
  var question1 = document.f1.question1.value;

  //variables for question 2
  var race2 = document.getElementById("#race2");
  var gender2 = document.getElementById("#gender2");
  var sexuality2 = document.getElementById("#sexuality2");
  var age2 = document.getElementById("#age2");
  var ability2 = document.getElementById("#ability2");
  var income2 = document.getElementById("#income2");
  var question2 = document.f1.question2.value;

  //variables for question 3
  var race3 = document.getElementById("#race3");
  var gender3 = document.getElementById("#gender3");
  var sexuality3 = document.getElementById("#sexuality3");
  var age3 = document.getElementById("#age3");
  var ability3 = document.getElementById("#ability3");
  var income3 = document.getElementById("#income3");
  var question3 = document.f1.question3.value;

  //variables for question 4
  var race4 = document.getElementById("#race4");
  var gender4 = document.getElementById("#gender4");
  var sexuality4 = document.getElementById("#sexuality4");
  var age4 = document.getElementById("#age4");
  var ability4 = document.getElementById("#ability4");
  var income4 = document.getElementById("#income4");
  var question4 = document.f1.question4.value;

  //variables for question 5
  var race5 = document.getElementById("#race5");
  var gender5 = document.getElementById("#gender5");
  var sexuality5 = document.getElementById("#sexuality5");
  var age5 = document.getElementById("#age5");
  var ability5 = document.getElementById("#ability5");
  var income5 = document.getElementById("#income5");
  var question5 = document.f1.question5.value;

  //write messages
  myChoice.innerHTML = "You answered: " + question1 + "<br>" + "I chose " + question1 + " because...";
  myChoice2.innerHTML = "You answered: " + question2 + "<br>" + "I chose " + question2 + " because...";
  myChoice3.innerHTML = "You answered: " + question3 + "<br>" + "I chose " + question3 + " because...";
  myChoice4.innerHTML = "You answered: " + question4 + "<br>" + "I chose " + question4 + " because...";
  myChoice5.innerHTML = "You answered: " + question5 + "<br>" + "I chose " + question5 + " because...";

  return false;
}

//capture submit event for second form
document.f2.onsubmit = processForm2;
var gallery = document.getElementById("gallery");

//variables for form 2
var reason = document.f2.reason.value;
var reason2 = document.f2.reason2.value;
var reason3 = document.f2.reason3.value;
var reason4 = document.f2.reason4.value;
var reason5 = document.f2.reason5.value;


function processForm2() {
  console.log('process2');

  myMsg.innerHTML = "I chose " + question1 + "because " + reason;
  console.log('write msgs')
  myMsg2.innerHTML = "I chose " + question2 + "because " + reason2;
  myMsg3.innerHTML = "I chose " + question3 + "because " + reason3;
  myMsg4.innerHTML = "I chose " + question4 + "because " + reason4;
  myMsg5.innerHTML = "I chose " + question5 + "because " + reason5;

  return false;
}