const video=document.getElementById('videoPlayer');
const videothumbnail=document.getElementById('thumbnail')
const videopause=document.getElementById('pause');
const frwd=document.getElementById('skip-10');
const bckwd=document.getElementById('skipmin-10');
const volume=document.getElementById('volume');
const mute=document.getElementById('mute');


const videocontainer=document.querySelector('.videocontainer');
const controls=document.querySelector('.controls');
const progressbar=document.querySelector('.progressbar');
const playbackline=document.querySelector('.playback-line');

const currenttime=document.getElementById('current-time');
const maxduration=document.getElementById('max-duration');


videopause=addEventListener('click',()=>{
 if (video.paused){
    videothumbnail.style.display="none";
    video.play();
    videopause.innerHTML='<i class="fa-solid fa-pause"></i>';
 }
 else{
    video.pause();
    videopause.innerhtml='<i class="fa-solid fa-play"></i>';
 }
})

let ispalying=false;
function toggleplaypause() {
    if(ispalying){
        video.pause();
        videopause.innerHTML='<i class="fa-solid fa-play"></i>';

    }else{
        videothumbnail.style.display="none";
        video.play();
        videopause.innerHTML='<i class="fa-solid fa-pause"></i>';
       
    }
    ispalying=!ispalying;
}