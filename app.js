let video = document.querySelector(".video");
let redbar = document.querySelector(".red-bar");
let btn = document.getElementById("play-pause");
let muteBtn = document.getElementById("mute");
let volumeslider = document.getElementById("volumeSlider");
let Bar = document.querySelector(".bar");
let fullscreen = document.getElementById("fullscreen");
let allVid = document.querySelector(".allVideo");


function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};

// red barre 

video.addEventListener("timeupdate", function () {
  let times = video.currentTime / video.duration;

  redbar.style.width = times * 100 + "%";

  if (video.ended) {
    btn.className = "play";
  }
});

// mute la video

muteBtn.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = "Mute";
  } else {
    video.muted = true;
    muteBtn.innerHTML = "Unmute";
  }
});

// Volume

volumeslider.addEventListener("change", function () {
  video.volume = volumeslider.value / 100;
});

// la barre red clikable

let rect = Bar.getBoundingClientRect();
let largeur = rect.width;

Bar.addEventListener("click", function (e) {
  // la valeur de notre click sur x par rapport a notre element

  let x = e.clientX - rect.left;

  let widthPercent = (x * 100) / largeur;

  let currentTimeTrue = (widthPercent * 63) / 100;

  // position en secondes
  video.currentTime = currentTimeTrue;
  // barre orange qui va la ou on clique
  redbar.style.width = widthPercent + "%";
});


fullscreen.addEventListener("click", function (e) {
    allVid.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    $('.full-btn').css({
        'display': 'none',
    });
    $('.out-btn').css({
        'display': 'block',
    });
});
out.addEventListener("click", function (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';
    document.webkitExitFullscreen();

    $('.full-btn').css({
        'display': 'block',
    });
    $('.out-btn').css({
        'display': 'none',
    });
});