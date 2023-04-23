<audio id="myAudio"></audio>

<script>
var playlist = [  "muzik1.mp3",  "muzik2.mp3",  "muzik3.mp3"];

var currentSong = 0;
var audio = document.getElementById("myAudio");
audio.src = playlist[currentSong];

audio.onended = function() {
  currentSong++;
  if (currentSong >= playlist.length) {
    currentSong = 0;
  }
  audio.src = playlist[currentSong];
  audio.play();
};

audio.play();
</script>

  