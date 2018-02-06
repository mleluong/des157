console.log('reading');
"use strict";

var tang = document.getElementById('tang');
var lip = document.getElementById('lip');
var panda = document.getElementById('panda');

var hearts = document.getElementById('hearts');
var notes = document.getElementById('notes');
var tangerfriend = document.getElementById('tangerfriend');

var tangCapt = document.getElementById('tang-caption');
var lipCapt = document.getElementById('lip-caption');
var pandaCapt = document.getElementById('panda-caption');

/*click on tangerine to reveal tangerine face and caption*/
tang.addEventListener('click', function() {
  tang.src = 'images/tangerine-face.png';
  tangCapt.style.display = 'block';
  lipCapt.style.display = 'none';
  pandaCapt.style.display = 'none';
})

/*click on lipstick to reveal lips, hearts, and caption*/
lip.addEventListener('click', function() {
  lip.src = 'images/lipstick-lips.png';
  hearts.style.visibility = 'visible';
  lipCapt.style.display = 'block';
  tangCapt.style.display = 'none';
  pandaCapt.style.display = 'none';
})

/*click on panda to reveal music notes, earphones, and caption*/
panda.addEventListener('click', function() {
  panda.src = 'images/panda-earphones.png';
  pandaCapt.style.display = 'block';
  notes.style.visibility = 'visible';
  tangCapt.style.display = 'none';
  lipCapt.style.display = 'none';
})

/*click on hearts to reveal tanger-friend*/
hearts.addEventListener('click', function() {
  tangerfriend.style.visibility = 'visible';
})