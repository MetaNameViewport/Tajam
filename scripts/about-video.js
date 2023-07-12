let video = document.getElementById('video');
let mainContainer = document.getElementsByClassName('about-video')[0];
let playButton = document.getElementsByClassName('video-play-button')[0];


playButton.addEventListener('click', function(e) {
    video.style.display = 'block';
    playButton.style.display = 'none';
    mainContainer.style.background = 'transparent';

    video.play()
})


video.addEventListener('ended', function(e) {
    video.style.display = 'none';
    playButton.style.display = 'flex';

    mainContainer.style.backgroundImage = 'linear-gradient(to right bottom, var(--bg-gradient-color-1), var(--bg-gradient-color-2)), url("images/individual/about_video/About_video_bg.png")';
})
