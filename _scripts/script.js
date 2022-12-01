let musics = [
    {
        title: 'It Was a Time',
        artist: 'TrackTribe',
        src: '../_musics/It Was a Time - TrackTribe.mp3',
        img: '../_imgs/rock.jpg'
    },

    {
        title: 'Slipping Away',
        artist: 'Dyalla',
        src: '../_musics/Slipping Away - Dyalla.mp3',
        img: '../_imgs/hip_hop.jpg'
    },

    {
        title: 'Ceremonial Library',
        artist: 'Asher Fulero',
        src: '../_musics/Ceremonial Library - Asher Fulero.mp3',
        img: '../_imgs/classic.jpg'
    }
];

let music = document.querySelector('audio');

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');

musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));

document.querySelector('.button-play').addEventListener('click', playMusic); // playMusic -> função para tocar a música

document.querySelector('.button-pause').addEventListener('click', stopMusic);

music.addEventListener('timeupdate', refreshBar); // timeupdate -> evento que verifica se a música está tocando

function playMusic() {
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function stopMusic() {
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function refreshBar() {
    const bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'; // dividindo a duração da música pelo tempo atual em que ela está e multiplicando por 100 para obter a porcentagem disso

    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds) {
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;

    if(secondsField < 10) {
        secondsField = '0' + secondsField;
    }

    return minutesField + ':' + secondsField;
}

