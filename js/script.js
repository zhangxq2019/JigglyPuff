var audio = document.querySelector('audio')
var isPlaying = false;
document.querySelector('.mouth').addEventListener('click', function () {
    document.querySelector('.mouth').classList.toggle('sing');
    document.querySelector('.music-note-one').classList.toggle('music-note');
    document.querySelector('.music-note-two').classList.toggle('music-note');
    if(!isPlaying){
        audio.load()
        setTimeout(function(){
            audio.play()
        },200)

        isPlaying = true
        // document.getElementsByTagName("body")[0].appendChild(audio);
    }else{
        audio.pause()
        isPlaying = false
        // document.getElementsByTagName("body")[0].appendChild(audio);
    }
})