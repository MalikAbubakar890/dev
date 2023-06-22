function playVideo() {
  var playButton = document.querySelector('.play-button');
  var videoPlayer = document.querySelector('.video-player');

  playButton.style.display = 'none';
  videoPlayer.style.display = 'block';

  videoPlayer.src += '?autoplay=1';
}
