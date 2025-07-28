const video=document.getElementById('videoPlayer');
const videothumbnail=document.getElementById('thumbnail')
const videopause=document.getElementById('play');
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
    videopause.innerHTML='<i class="fa-solid fa-play"></i>';
 }
})

let ispalying=false;
function toggleplaypause() {
    if(ispalying){
            
        videopause.innerHTML='<i class="fa-solid fa-play"></i>';

    }else{
        videothumbnail.style.display="none";
        video.play();
        videopause.innerHTML='<i class="fa-solid fa-pause"></i>';
       
    }
    ispalying=!ispalying;
}
document.addEventListener('keydown',function(event){
    if (event.key==32||event.key==" "){
        event.preventDefault();
        toggleplaypause();
    }
})
// video.addEventListener('play',function(){
//     ispalying=false;

// })
video.addEventListener("ended",function(){
    videopause.innerHTML='<i class= "fa-solid fa-pause"></i>';
})
frwd.addEventListener('click',function(){
    video.currentTime+=5;
})

bckwd.addEventListener('click',function(){
    video.currentTime-=5;
})

mute.addEventListener('click',function(){
    if(video.muted){
        video.muted=false;
        mute.innerHTML='<i class="fa-solid fa-volume-up"></i>';
    }
    else{
        video.muted=true;
        mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
    }
})