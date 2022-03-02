let i = 0;
let txt = 'Click anywhere to unlock the page~';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("clickToUnlock").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

$('#clickToUnlock').ready( function() {
    typeWriter();
});

let video = document.getElementById('mainVid')

function handleVideo () {
    video.muted = true;
}

handleVideo() 

document.addEventListener('click', () => {
    $('#fade').fadeOut('slow')

    video.play();
    video.muted = false; 
    video.volume = 0.5;
});


function handleTitle() {
    let i = 0;
    setInterval(function(){
        let titles=['ANDREY', 'ANDRE', 'ANDR', 'AND', 'AN', 'A', 'AN', 'AND', 'ANDR', 'ANDRE', 'ANDREY'];
        if (i === titles.length) i=0;

        document.title = titles[i];

        i++;
    }, 300);
}

handleTitle();