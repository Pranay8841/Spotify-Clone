console.log("Welcome to Spotify Clone");

// Initialize the Variables
let songIndex = 0;
let audioElement  = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: " Salam-e-Ishq", filePath: "1.mp3", coverPath: " 1.jpg"},
    {songName: " Salam-e-Ishq", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: " Salam-e-Ishq", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: " Salam-e-Ishq", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: " Salam-e-Ishq", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: " Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg"}
] 

songItems.forEach((element, i)=>
{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// Handle play/pause click
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1; 
    }
    else
    {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
    }
})
// listen To Events
audioElement.addEventListener('timeupdate', ()=>
{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>
    {
       makeAllPlay();
       a = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
    //    audioElement.src = '${a}.mp3';
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    })
})