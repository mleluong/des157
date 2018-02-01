console.log('reading');

var tang = document.getElementById('tang');
var lip = document.getElementById('lip');
var panda = document.getElementById('panda');

var tangCapt = document.getElementById('tang-caption')
var lipCapt = document.getElementById('lip-caption')
var pandaCapt = document.getElementById('panda-caption')

tang.addEventListener('click', function() {
  tang.src = 'images/tangerine-face.png';
  tang.style.cursor = 'pointer';
  tangCapt.style.display = 'block';
})

lip.addEventListener('click', function() {
  lip.src = '';
  lip.style.cursor = 'pointer';
  lipCapt.style.display = 'block';
})

panda.addEventListener('click', function() {
  panda.src = '';
  panda.style.cursor = 'pointer';
  pandaCapt.style.display = 'block';
})