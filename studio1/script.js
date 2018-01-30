console.log("reading");
"use strict";

//capture the submit event
document.f.onsubmit = processForm;
var results = document.getElementById("results");
var stopSign = document.getElementById("stopSign");
var barbie = document.getElementById("barbie");

//capture the reset event
document.f.onreset = resetForm;

//define the process function
function processForm() {
  console.log('process');

  var meanGirl = document.f.meanGirl.value;
  var clothing1 = document.f.clothing1.value;
  var celeb1 = document.f.celeb1.value;
  var fam = document.f.fam.value;
  var year90 = document.f.year90.value;
  var animal = document.f.animal.value;
  var clothing2 = document.f.clothing2.value;
  var bodyPart = document.f.bodyPart.value;
  var vegetable = document.f.vegetable.value;
  var clothing3 = document.f.clothing3.value;
  var clothingColor = document.f.clothingColor.value;
  var pattern = document.f.pattern.value;
  var currentYear = document.f.currentYear.value;
  var celeb2 = document.f.celeb2.value;
  var celeb3 = document.f.celeb3.value;
  var crush = document.f.crush.value;

  //write messages
  myHeading.innerHTML = "You have been stopped by the fashion police!"

  myMsg.innerHTML = "<span>" + meanGirl + "</span>: Excuuuuse me. What are you <em>wearing?</em> That <span>" + clothing1 + "</span> looks like <span>" + celeb1 + "</span> pulled it out of their <span>" + fam + "</span>'s closet in <span>" + year90 + "</span>, and then a rabid <span>" + animal + "</span> barfed all over it. Gross. "

  myMsg2.innerHTML = "And what’s with your <span>" + clothing2 + "</span> ?!??!? It makes your <span>" + bodyPart + "</span> look like an uncooked <span>" + vegetable + "</span> that nobody picks at the grocery store because it’s uglier than all the other <span>" + vegetable + "</span>s. Soooo sad."

  myMsg3.innerHTML = " And don’t even get me started on that <span>" + clothing3 + "</span>. Who matches <span>" + clothingColor + "</span> with <span>" + pattern + "</span> in <span>" + currentYear + "</span>? That’s a worse match than when <span>" + celeb2 + "</span> was dating <span>" + celeb3 + "</span>, and NO ONE was sad when <em>they</em> broke up. Speaking of which, did <span>" + crush + "</span> ever call you back? I didn't think so, loser. Okay, byeeee!"

  scrollUp.innerHTML = "Run away crying"

  //show after submit
  results.setAttribute('class', 'show');
  stopSign.setAttribute('class', 'show');
  barbie.setAttribute('class', 'show');
  scrollUp.setAttribute('class','show');

  return false;
}

//define the reset function
function resetForm() {
  results.setAttribute('class', 'hide');
  stopSign.setAttribute('class', 'hide');
  barbie.setAttribute('class', 'hide');
  scrollUp.setAttribute('class', 'hide');
}
