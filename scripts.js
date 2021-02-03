$( document ).ready(function(){
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

let wishes = ["Happy New Year!", "Marry crismas!", "Good luck.", "Good health."]

$(".card").on("click", function(){
  $(".front").toggleClass("flip-front");
  $(".back").toggleClass("flip-back");
});


$(".front").on("click", function(){
  $(".back p").text(wishes[getRandomInt(wishes.length)]);
});

var my_audio = document.getElementById("myAudio");
$(document).hover( function(){
my_audio.play()
});

$("#playBtn").on("click", function() {
  my_audio.play();
});

$("#pauseBtn").on("click", function()  {
  my_audio.pause();
});
});
