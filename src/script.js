(function() {
  var allVideoContainer = document.querySelectorAll(".lp-video-container");
  var allVideos = document.querySelectorAll(".lp-video");
  console.log(allVideos);

  allVideos.forEach(video => {
    video.addEventListener("click", () => {
      tapToPlayButton();
      clickToPlay(video);
    });
  });

  const clickToPlay = video => {
    if (video.paused) {
      video.play();
      console.log("play");
    } else {
      video.pause();
      console.log("pause");
    }
  };

  const tapToPlayButton = () =>{
    
  }
})();
