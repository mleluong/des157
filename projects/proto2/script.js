console.log("reading");
"use strict";

//mobile navigation dropdown
var menu = document.getElementById('menu');
var dropdown = document.getElementById('dropdown');
menu.addEventListener('click', function() {
  console.log('toggle menu')
  if (dropdown.style.display == 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
})

/*******************************FORMS*************************************/
//submit variables
var submitquestions = document.getElementById('submit1');
var submitreflection = document.getElementById('submit2');

//next button variables
var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');

//back button variables
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');
var back3 = document.getElementById('back3');
var back4 = document.getElementById('back4');

//jump to reflection button  variables
var jump1 = document.getElementById('jump1');
var jump2 = document.getElementById('jump2');
var jump3 = document.getElementById('jump3');
var jump4 = document.getElementById('jump4');
var jump4 = document.getElementById('jump4');


//capture the submit event
document.f1.onsubmit = processForm;
var reflection = document.getElementById("reflection");

//click submit, scroll
submitquestions.addEventListener('click', function() {
  console.log('jump to reflection')
  window.location.href = "#reflection";
})

submitreflection.addEventListener('click', function() {
  console.log('jump to gallery')
  window.location.href = "#gallery";
})

//click next, scroll to next question
next1.addEventListener('click', function() {
  console.log('go to question 2')
  window.location.href = "#question2";
})

next2.addEventListener('click', function() {
  console.log('go to question 3')
  window.location.href = "#question3";
})

next3.addEventListener('click', function() {
  console.log('go to question 4')
  window.location.href = "#question4";
})

next4.addEventListener('click', function() {
  console.log('go to question 5')
  window.location.href = "#question5";
})

//click back, scroll back to last question
back1.addEventListener('click', function() {
  console.log('back to question 1')
  window.location.href = "#question1";
})

back2.addEventListener('click', function() {
  console.log('back to question 2')
  window.location.href = "#question2";
})

back3.addEventListener('click', function() {
  console.log('back to question 3')
  window.location.href = "#question3";
})

back4.addEventListener('click', function() {
  console.log('go to question 4')
  window.location.href = "#question4";
})

//click 'Reflect Now?' -> scroll to Reflection, populate one question at a time
jump1.addEventListener('click', function() {
  console.log('jump to reflection 1')
  window.location.href = "#r1";

  //variables for question 1
  var race1 = document.getElementById("#race1");
  var gender1 = document.getElementById("#gender1");
  var sexuality1 = document.getElementById("#sexuality1");
  var age1 = document.getElementById("#age1");
  var ability1 = document.getElementById("#ability1");
  var income1 = document.getElementById("#income1");

  //populate reflection1 section
  var question1 = document.f1.question1.value;
  myChoice.innerHTML = "You answered: " + question1 + "<br>" + "I chose " + question1 + " because...";
})

jump2.addEventListener('click', function() {
  console.log('jump to reflection 2')
  window.location.href = "#r2";
})

jump3.addEventListener('click', function() {
  console.log('jump to reflection 3')
  window.location.href = "#r3";
})

jump4.addEventListener('click', function() {
  console.log('jump to reflection 4')
  window.location.href = "#r4";
})

jump5.addEventListener('click', function() {
  console.log('jump to reflection 5')
  window.location.href = "#r5";
})

//click 'next question' on GALLERY section to go back to questions
//jumpback button variable
goback1.addEventListener('click', function() {
  var goback1 = document.getElementById("#goback1");
  window.location.href = "#question1";
})

goback2.addEventListener('click', function() {
  var goback2 = document.getElementById("#goback2");
  window.location.href = "#question2";
})

goback3.addEventListener('click', function() {
  var goback3 = document.getElementById("#goback3");
  window.location.href = "#question3";
})

goback4.addEventListener('click', function() {
  var goback4 = document.getElementById("#goback4");
  window.location.href = "#question4";
})

goback5.addEventListener('click', function() {
  var goback2 = document.getElementById("#goback5");
  window.location.href = "#question5";
})

//click 'Back to question...' on reflection section to go back to questions
jumpback2.addEventListener('click', function() {
  var jumpback2 = document.getElementById("#jumpback2");
  window.location.href = "#question2";
})

jumpback3.addEventListener('click', function() {
  var jumpback3 = document.getElementById("#jumpback3");
  window.location.href = "#question3";
})

jumpback4.addEventListener('click', function() {
  var jumpback2 = document.getElementById("#jumpback4");
  window.location.href = "#question4";
})

jumpback5.addEventListener('click', function() {
  var jumpback2 = document.getElementById("#jumpback5");
  window.location.href = "#question5";
})

//after submitting form, populate reflection section
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

//capture submit event for reflection form
document.f2.onsubmit = processForm2;
var gallery = document.getElementById("gallery");

function processForm2() {
  console.log('process2');
  //variables for questions
  var question1 = document.f1.question1.value;
  var question2 = document.f1.question2.value;
  var question3 = document.f1.question3.value;
  var question4 = document.f1.question4.value;
  var question5 = document.f1.question5.value;

  //variables for user filled field
  var reason = document.f2.reason.value;
  var reason2 = document.f2.reason2.value;
  var reason3 = document.f2.reason3.value;
  var reason4 = document.f2.reason4.value;
  var reason5 = document.f2.reason5.value;

  //write messages for gallery
  myMsg.innerHTML = "I chose " + question1 + " because " + reason;
  console.log('write msgs')
  myMsg2.innerHTML = "I chose " + question2 + " because " + reason2;
  myMsg3.innerHTML = "I chose " + question3 + " because " + reason3;
  myMsg4.innerHTML = "I chose " + question4 + " because " + reason4;
  myMsg5.innerHTML = "I chose " + question5 + " because " + reason5;

  return false;
}