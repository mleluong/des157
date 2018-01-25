console.log("hi world");
"use strict";

document.f.onsubmit = processForm;

function processForm() {
  var meanGirl = document.f.meanGirl.value;
  var clothing1 = document.f.clothing1.value;
  var celeb1 = document.f.celeb1.value;
  var fam = document.f.fam.value;
  var year90 = document.f.year90.value;
  var animal = document.f.animal.value;
  var clothing2 = document.f.clothing3.value;
  var bodyPart = document.f.bodyPart.value;
  var vegetable = document.f.vegetable.value;
  var clothing3 = document.f.clothing3.value;
  var clothingColor = document.f.clothingColor.value;
  var pattern = document.f.pattern.value;
  var currentYear = document.f.currentYear.value;
  var celeb2 = document.f.celeb2.value;
  var celeb3 = document.f.celeb3.value;
  var crush = document.f.crush.value;

  myMsg.innerHTML = meanGirl + ": Excuuuuse me. What are you <em>wearing?</em> That " + clothing1 + " looks like " + celeb1 + " pulled it out of their " + fam + "'s closet in " + year90 + ", and then a rabid " + animal + " barfed all over it. Gross. And what’s with those " + clothing2 + " ?!??!? It makes your " + bodyPart + " look like an uncooked " + vegetable + " that nobody picks at the grocery store because it’s uglier than all the other " + vegetable + "s. Soooo sad. And don’t even get me started on that " + clothing3 + ". Who matches " + clothingColor + " with "

  return false;

}