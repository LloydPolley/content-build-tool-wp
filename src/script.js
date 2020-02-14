(function() {
  var allVideoContainer = document.querySelectorAll(".lp-video");
  var allVideos = document.querySelectorAll(".lp-video video");

  allVideos.forEach(video => {
    video.addEventListener("click", () => {
      clickToPlay(video);
    });

    if (video.dataset.tapToPlay === true) {
      addTapToPlayButton();
    }
  });

  const clickToPlay = video => {
    for (let i = 0; i < allVideos.length; i++) {
      if (allVideos[i] === video) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      } else {
        allVideos[i].pause();
      }
    }
  };

  const addTapToPlayButton = container => {
    const tapButton = '<p class="tap-to-play">Tap to play</div>';
    tapButton.style.cssText =
      "position: absolute; left: 50%; bottom: 25%; transform: translatex(-50%); color: white;";
    container.innerHTML += tapButton;
  };
})();
