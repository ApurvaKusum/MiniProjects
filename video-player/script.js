const video =document.getElementById('video');
const playBtn =  document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



//Play and Pause video 

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

//update play and pause Icon
function updatePlayIcon(){
if(video.paused){
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
} else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';

}
}

//Update progress 
function updateProgress(){
    progressBar.value = (video.currentTime/video.duration) *100;

    //GET MIN
let min = Math.floor(video.currentTime/60);
if(min <10){
    min = '0'+ String(min)
}

    //GET SEC
    let sec = Math.floor(video.currentTime%60);
    if(sec <10){
        sec = '0'+ String(sec)
    }

    timestamp.innerHTML = `${min}:${sec}`;

}

//set video time to progress

function setVideoProgress(){
 video.currentTime = (+progressBar.value * video.duration)/100;
}

// stop the video

function stopVideo(){
 video.currentTime =0;
    video.pause();
}

// Event Listeners
video .addEventListener('click', toggleVideoStatus);
video .addEventListener('play', updatePlayIcon);
video .addEventListener('pause', updatePlayIcon);
video .addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click',stopVideo);
progressBar.addEventListener('change',setVideoProgress);