var playButtons = document.getElementsByClassName('playButton');
for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button clicked");
    var audioId = this.getAttribute('data-audio');
    var audio = document.getElementById(audioId);
    audio.play();
  });
}