console.log("reading");
"use strict";

/*********************************mobile navigation dropdown********************************/
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

/****************************QUESTIONS SECTION************************************/

/***************NEXT BUTTONS******************/
//next button variables
var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');

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

/******************BACK BUTTONS********************/
//back button variables
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');
var back3 = document.getElementById('back3');
var back4 = document.getElementById('back4');

//click back, scroll back to last question's reflection
back1.addEventListener('click', function() {
  console.log('back to r1')
  window.location.href = "#r1";
})

back2.addEventListener('click', function() {
  console.log('back to r2')
  window.location.href = "#r2";
})

back3.addEventListener('click', function() {
  console.log('back to r3')
  window.location.href = "#r3";
})

back4.addEventListener('click', function() {
  console.log('go to r4')
  window.location.href = "#r4";
})


/**************QUESTIONS -> REFLECTIONS*****************/
// variables to for jump to reflection button
var jump1 = document.getElementById('jump1');
var jump2 = document.getElementById('jump2');
var jump3 = document.getElementById('jump3');
var jump4 = document.getElementById('jump4');
var jump4 = document.getElementById('jump4');

//click 'next' -> scroll to Reflection, populate one question at a time
//Question1 -> Reflection 1
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
  myChoice.innerHTML = "You answered: <span>" + question1 + "</span> <br>" + "I chose <span>" + question1 + "</span> because...";
  //turn off 'next question' button on gallery; replace with 'next reflection'
})

//Question2 -> Reflection 2
jump2.addEventListener('click', function() {
  console.log('jump to reflection 2')
  window.location.href = "#r2";
  //variables for question 2
  var race2 = document.getElementById("#race2");
  var gender2 = document.getElementById("#gender2");
  var sexuality2 = document.getElementById("#sexuality2");
  var age2 = document.getElementById("#age2");
  var ability2 = document.getElementById("#ability2");
  var income2 = document.getElementById("#income2");
  //populate reflection2 section
  var question2 = document.f1.question2.value;
  myChoice2.innerHTML = "You answered: <span>" + question2 + "</span> <br>" + "I chose <span>" + question2 + "</span> because...";
})

jump3.addEventListener('click', function() {
  console.log('jump to reflection 3')
  window.location.href = "#r3";
  //variables for question 3
  var race3 = document.getElementById("#race2");
  var gender3 = document.getElementById("#gender2");
  var sexuality3 = document.getElementById("#sexuality2");
  var age3 = document.getElementById("#age2");
  var ability3 = document.getElementById("#ability2");
  var income3 = document.getElementById("#income2");
  //populate reflection2 section
  var question3 = document.f1.question3.value;
  myChoice3.innerHTML = "You answered: <span>" + question3 + "</span><br>" + "I chose <span>" + question3 + "</span> because...";
})

jump4.addEventListener('click', function() {
  console.log('jump to reflection 4')
  window.location.href = "#r4";
  //variables for question 4
  var race4 = document.getElementById("#race4");
  var gender4 = document.getElementById("#gender4");
  var sexuality4 = document.getElementById("#sexuality4");
  var age4 = document.getElementById("#age4");
  var ability4 = document.getElementById("#ability4");
  var income4 = document.getElementById("#income4");
  //populate reflection4 section
  var question4 = document.f1.question4.value;
  myChoice4.innerHTML = "You answered: <span>" + question4 + "</span> <br>" + "I chose <span>" + question4 + "</span> because...";
})

jump5.addEventListener('click', function() {
  console.log('jump to reflection 5')
  window.location.href = "#r5";
  //variables for question 5
  var race5 = document.getElementById("#race5");
  var gender5 = document.getElementById("#gender5");
  var sexuality5 = document.getElementById("#sexuality5");
  var age5 = document.getElementById("#age5");
  var ability5 = document.getElementById("#ability5");
  var income5 = document.getElementById("#income5");
  //populate reflection5 section
  var question5 = document.f1.question5.value;
  myChoice5.innerHTML = "You answered: <span>" + question5 + "</span><br>" + "I chose <span>" + question5 + "</span> because...";
})

/***********************************REFLECTION SECTION BUTTONS***************************************/
//click 'back' on reflection section to go back to questions
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
  var jumpback5 = document.getElementById("#jumpback5");
  window.location.href = "#question5";
})


//'answer now' button only activates when textarea has text
var reason = document.getElementById('reason');
var reason2 = document.getElementById('reason2');
var reason3 = document.getElementById('reason3');
var reason4 = document.getElementById('reason4');
var reason5 = document.getElementById('reason5');

reason.addEventListener('input', function() {
  console.log('enable button');
  if (reason.value.length == 0) {
    reason.disabled = true;
  } else {
    togallery1.disabled = false;
  }
})

reason2.addEventListener('input', function() {
  console.log('enable button');
  if (reason2.value.length == 0) {
    reason2.disabled = true;
  } else {
    togallery2.disabled = false;
  }
})

reason3.addEventListener('input', function() {
  console.log('enable button');
  if (reason3.value.length == 0) {
    reason3.disabled = true;
  } else {
    togallery3.disabled = false;
  }
})

reason4.addEventListener('input', function() {
  console.log('enable button');
  if (reason4.value.length == 0) {
    reason4.disabled = true;
  } else {
    togallery4.disabled = false;
  }
})

reason5.addEventListener('input', function() {
  console.log('enable button');
  if (reason5.value.length == 0) {
    reason5.disabled = true;
  } else {
    togallery5.disabled = false;
  }
})



//click 'answer now' on reflection section to continue to GALLERY; populate gallery section!!!
togallery1.addEventListener('click', function() {
  //scroll to gallery 1
  console.log('go to gallery1');
  var togallery1 = document.getElementById('#togallery1');
  window.location.href = "#gallery1";
  //populate gallery 1
  //variables for questions
  var question1 = document.f1.question1.value;
  //variables for user filled field
  var reason = document.f2.reason.value;
  //write message for gallery 1
  console.log('write message for gallery 1');
  myMsg.innerHTML = "I chose " + question1 + " because " + reason;
  //animate fade in
  myMsg.className = 'msg animatemsg';
  q1other1.className = 'otheruser1 animateset1';
  q1other2.className = 'otheruser2 animateset1';
  q1other3.className = 'otheruser3 animateset1';
  q1other4.className = 'otheruser4 animateset2';
  q1other5.className = 'otheruser5 animateset2';
  q1other6.className = 'otheruser6 animateset2';
})

togallery2.addEventListener('click', function() {
  //scroll to gallery 2
  console.log('go to gallery2');
  var togallery2 = document.getElementById('#togallery2');
  window.location.href = "#gallery2";
  //populate gallery 2
  //variables for questions
  var question2 = document.f1.question2.value;
  //variables for user filled field
  var reason2 = document.f2.reason2.value;
  //write message for gallery 1
  console.log('write message for gallery 2');
  myMsg2.innerHTML = "I chose " + question2 + " because " + reason2;
  //animate fade in
  myMsg2.className = 'msg animatemsg';
  q2other1.className = 'otheruser1 animateset1';
  q2other2.className = 'otheruser2 animateset1';
  q2other3.className = 'otheruser3 animateset1';
  q2other4.className = 'otheruser4 animateset2';
  q2other5.className = 'otheruser5 animateset2';
  q2other6.className = 'otheruser6 animateset2';
})

togallery3.addEventListener('click', function() {
  //scroll to gallery 3
  var togallery3 = document.getElementById('#togallery3');
  window.location.href = "#gallery3";
  //populate gallery 3
  //variables for questions
  var question3 = document.f1.question3.value;
  //variables for user filled field
  var reason3 = document.f2.reason3.value;
  //write message for gallery 1
  console.log('write message for gallery 3');
  myMsg3.innerHTML = "I chose " + question3 + " because " + reason3;
  //animate fade in
  myMsg3.className = 'msg animatemsg';
  q3other1.className = 'otheruser1 animateset1';
  q3other2.className = 'otheruser2 animateset1';
  q3other3.className = 'otheruser3 animateset1';
  q3other4.className = 'otheruser4 animateset2';
  q3other5.className = 'otheruser5 animateset2';
  q3other6.className = 'otheruser6 animateset2';
})

togallery4.addEventListener('click', function() {
  //scroll to gallery 4
  var togallery4 = document.getElementById('#togallery4');
  window.location.href = "#gallery4";
  //populate gallery 4
  //variables for questions
  var question4 = document.f1.question4.value;
  //variables for user filled field
  var reason4 = document.f2.reason4.value;
  //write message for gallery 1
  console.log('write message for gallery 4');
  myMsg4.innerHTML = "I chose " + question4 + " because " + reason4;
  //animate fade in
  myMsg4.className = 'msg animatemsg';
  q4other1.className = 'otheruser1 animateset1';
  q4other2.className = 'otheruser2 animateset1';
  q4other3.className = 'otheruser3 animateset1';
  q4other4.className = 'otheruser4 animateset2';
  q4other5.className = 'otheruser5 animateset2';
  q4other6.className = 'otheruser6 animateset2';
})

togallery5.addEventListener('click', function() {
  //scroll to gallery 5
  var togallery5 = document.getElementById('#togallery5');
  window.location.href = "#gallery5";
  //populate gallery 5
  //variables for questions
  var question5 = document.f1.question5.value;
  //variables for user filled field
  var reason5 = document.f2.reason5.value;
  //write message for gallery 1
  console.log('write message for gallery 5');
  myMsg5.innerHTML = "I chose " + question5 + " because " + reason5;
  //animate fade in
  myMsg5.className = 'msg animatemsg';
  q5other1.className = 'otheruser1 animateset1';
  q5other2.className = 'otheruser2 animateset1';
  q5other3.className = 'otheruser3 animateset1';
  q5other4.className = 'otheruser4 animateset2';
  q5other5.className = 'otheruser5 animateset2';
  q5other6.className = 'otheruser6 animateset2';
})

/**********************************GALLERY SECTION BUTTONS**********************************/
//click 'next question' on GALLERY section to jump back to Question Section!!!
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

backtor2.addEventListener('click', function() {
  var backtor2 = document.getElementById('#backtor2');
  window.location.href = "#r2";
})

backtor3.addEventListener('click', function() {
  var backtor3 = document.getElementById('#backtor3');
  window.location.href = "#r3";
})

backtor4.addEventListener('click', function() {
  var backtor4 = document.getElementById('#backtor4');
  window.location.href = "#r4";
})

backtor5.addEventListener('click', function() {
  var backtor2 = document.getElementById('#backtor5');
  window.location.href = "#r5";
})

/**********************CLICK SUBMIT******************************/
/****************SUBMIT FORMS********************/
//submit variables
var submitquestions = document.getElementById('submit1');

//capture the submit event
var reflection = document.getElementById("reflection");

//click submit, scroll
submitquestions.addEventListener('click', function() {
  console.log('jump to reflection')
  window.location.href = "#reflection";
})

submitquestions.addEventListener('click', processForm);

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
  myChoice.innerHTML = "You answered: <span>" + question1 + "</span> <br>" + "I chose <span>" + question1 + "</span> because...";
  myChoice2.innerHTML = "You answered: <span>" + question2 + "</span> <br>" + "I chose <span>" + question2 + "</span> because...";
  myChoice3.innerHTML = "You answered: <span>" + question3 + "</span> <br>" + "I chose <span>" + question3 + "</span> because...";
  myChoice4.innerHTML = "You answered: <span>" + question4 + "</span> <br>" + "I chose <span>" + question4 + "</span> because...";
  myChoice5.innerHTML = "You answered: <span>" + question5 + "</span><br>" + "I chose <span>" + question5 + "</span> because...";

  //hide 'ask me later' buttons
  console.log('hide ask me later buttons');
  next1.style.display = 'none';
  next2.style.display = 'none';
  next3.style.display = 'none';
  next4.style.display = 'none';
  submit1.style.display = 'none';

  console.log('turn off jumpback buttons in reflection section');
  jumpback2.style.display = 'none';
  jumpback3.style.display = 'none';
  jumpback4.style.display = 'none';
  jumpback5.style.display = 'none';

  console.log('turn on backtor2 buttons in reflection section');
  backtor2.style.display = 'block';
  backtor3.style.display = 'block';
  backtor4.style.display = 'block';
  backtor5.style.display = 'block';
  return false;
}

/**********************************IDENTITY SIGNS: REVIEWS*************************************/
var toreview =document.getElementById('toreview');
toreview.addEventListener('click', function(){
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

  //write messages for review
  console.log('write msgs for review')
  review1.innerHTML = "I chose " + question1 + " because " + reason;
  review2.innerHTML = "I chose " + question2 + " because " + reason2;
  review3.innerHTML = "I chose " + question3 + " because " + reason3;
  review4.innerHTML = "I chose " + question4 + " because " + reason4;
  review5.innerHTML = "I chose " + question5 + " because " + reason5;

  window.location.href='#review';
})

/**********************SUBMIT EVALUATION************************************
var submitevaluation = document.getElementById('#submitevaluation');
var review=document.getElementById('#review');

submitevaluation.addEventListener('click', processForm3);

function processForm3(){
  console.log('submit evaluation');
  var surprising = document.f3.surprising.value;
  var yourself = document.f3.yourself.value;
  var others = document.f3.others.value;
  var take = document.f3.take.value;

  var thanks=document.getElementById('#thanks');
  thanks.innerHTML="Thank you! Your response has been submitted."
}

/*
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
  console.log('write msgs')
  myMsg.innerHTML = "I chose " + question1 + " because " + reason;
  myMsg2.innerHTML = "I chose " + question2 + " because " + reason2;
  myMsg3.innerHTML = "I chose " + question3 + " because " + reason3;
  myMsg4.innerHTML = "I chose " + question4 + " because " + reason4;
  myMsg5.innerHTML = "I chose " + question5 + " because " + reason5;

  return false;
}
*/
