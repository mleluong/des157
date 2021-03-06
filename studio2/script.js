console.log('reading');
"use strict";

/*initialize main images*/
var tang = document.getElementById('tang');
var lip = document.getElementById('lip');
var panda = document.getElementById('panda');

/*initialize hidden images*/
var hearts = document.getElementById('hearts');
var notes = document.getElementById('notes');
var tangerfriend = document.getElementById('tangerfriend');

/*initialize captions*/
var tangCapt = document.getElementById('tang-caption');
var lipCapt = document.getElementById('lip-caption');
var pandaCapt = document.getElementById('panda-caption');
var heartsCapt = document.getElementById('hearts-caption');

/*initialize typography and arrow image*/
var h1 = document.getElementsByTagName("h1")[0];
var h2 = document.getElementsByTagName("h2")[0]
var arrow = document.getElementById("arrow");


/*click on tangerine to reveal tangerine face and caption*/
tang.addEventListener('click', function() {
  tang.src = 'images/tangerine-face.png';

/*change h1 and 2 and hide arrow*/
  h1.innerHTML="Me as a tangerine: aka Tangerine-mily!";
  h2.innerHTML="a cutie who loves lipstick and sharing music with friends"
  arrow.style.visibility="hidden";

/*show caption and hide other captions*/
  tangCapt.style.display = 'block';
  lipCapt.style.display = 'none';
  pandaCapt.style.display = 'none';
  heartsCapt.style.display='none';
})

/*click on lipstick to reveal lips, hearts, and caption*/
lip.addEventListener('click', function() {
  lip.src = 'images/lipstick-lips.png';
  hearts.style.visibility = 'visible';
  lipCapt.style.display = 'block';
  tangCapt.style.display = 'none';
  pandaCapt.style.display = 'none';
  heartsCapt.style.display='none';
  arrow.style.visibility="hidden";
})

/*click on panda to reveal music notes, earphones, and caption*/
panda.addEventListener('click', function() {
  panda.src = 'images/panda-earphones.png';
  notes.style.visibility = 'visible';
  pandaCapt.style.display = 'block';
  tangCapt.style.display = 'none';
  lipCapt.style.display = 'none';
  heartsCapt.style.display='none';
  arrow.style.visibility="hidden";
})

/*click on hearts to reveal tanger-friend and caption*/
hearts.addEventListener('click', function() {
  tangerfriend.style.visibility = 'visible';
  heartsCapt.style.display='block';
  pandaCapt.style.display = 'none';
  tangCapt.style.display = 'none';
  lipCapt.style.display = 'none';
})
