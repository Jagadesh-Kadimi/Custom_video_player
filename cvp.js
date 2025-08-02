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
const fullscreen=document.querySelector('.full-screen');

const currenttime=document.getElementById('current-time');
const maxduration=document.getElementById('max-duration');


videopause.addEventListener('click',()=>{
 if (video.paused){
    videothumbnail.style.display="none";
    video.play();
    videopause.innerHTML='<i class="fa-solid fa-pause"></i>';
 }
 else{
    video.pause();
    videopause.innerHTML='<i class="fa-solid fa-play"></i>';
 }
});

let ispalying=false;
function toggleplaypause() {
    if(ispalying){
        video.pause();
        videopause.innerHTML='<i class="fa-solid fa-pause"></i>';

    }else{
        videothumbnail.style.display="none";
        video.play();
        videopause.innerHTML='<i class="fa-solid fa-play"></i>';
       
    }
    ispalying=!ispalying;
}
videocontainer.addEventListener('keydown',function(event){
    if (event.key==32||event.key==" "){
        event.preventDefault();
        toggleplaypause();
    }
})
video.addEventListener('pause',function(){
    ispalying=false;
    // videopause.innerHTML='<i class= "fa-solid fa-pause"></i>';

})
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
        mute.value=video.volume;
        volume.value=1;
    }
    else{
        video.muted=true;
        mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
        volume.value=0;
    }
})
videocontainer.addEventListener('keydown',function(event){
    if(event.key=="M"||event.key=="m"){
        event.preventDefault();
         if(video.muted){
        video.muted=false;
        mute.innerHTML='<i class="fas fa-volume-up"></i>';
        volume.value=1;
    }
    else{
        video.muted=true;
        mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
        volume.value=0;
    }     
}
})
volume.addEventListener('input',function(){
    video.volume=volume.value;
    if(video.volume==0){
        
        mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>"';
    }
    else{
       
        mute.innerHTML='<i class="fa-solid fa-volume-up"></i>';
    }
})
videocontainer.addEventListener('mouseenter',()=>{
    controls.style.opacity=1;
})
videocontainer.addEventListener('mouseleave',()=>{
    if(ispalying) return;
    controls.style.opacity=0;
})
video.addEventListener('timeupdate',function(){
    const currenttime=video.currentTime;
    const maxduration=video.duration;
    const percentage=(currenttime/maxduration)*100;
    progressbar.style.width=percentage+"%";
})
function thumbnail(){
    videothumbnail.style.display="block";
}
video.addEventListener('ended',()=>{
    progressbar.style.width="0%";
    thumbnail();
})
const  timeformat=(timeInput)=>{
    let minute=Math.floor(timeInput/60);
    minute=minute<10? "0" + minute:minute;

    let second=Math.floor(timeInput%60);
    second=second<10? "0" + second:second;
    return `${minute}:${second}`;
}
setInterval(()=>{
   currenttime.innerHTML=timeformat(video.currentTime);
   maxduration.innerHTML=timeformat(video.duration);
},1)

playbackline.addEventListener('click',(e)=>{
        let timelineWidth=playbackline.clientWidth;
        video.currentTime=(e.offsetX/timelineWidth)*video.duration;
})
function updatevolumebackground(){
    const value= (volume.value-volume.min)/(volume.max-volume.min)*100;
    volume.style.setProperty('--value', `${value}%`);
}
volume.addEventListener('input',updatevolumebackground);
updatevolumebackground();
fullscreen.addEventListener('click',()=>{
    if(!document.fullscreenElement){
        videocontainer.requestFullscreen().catch(error => {
            console.error(`Error attempting to enable fullscreen mode: ${error.message} `);
            alert(`Error attempting to enter fullscreen mode: ${error.message}`);
        });
    }
    else{
        document.exitFullscreen().catch(error => {
            console.error(`Error attempting to exit fullscreen mode: ${error.message}`);
            alert(`Error attempting to exit fullscreen mode: ${error.message}`);
        });
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = commentForm.querySelector('textarea');
        const text = textarea.value.trim();
        if (text) {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `<strong>You:</strong> ${text}`;
            commentList.appendChild(commentDiv);
            textarea.value = '';
        }
    });
});