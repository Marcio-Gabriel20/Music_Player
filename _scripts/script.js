let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.description h2');
let nameArtist = document.querySelector('.description i');

renderMusic(indexMusic);

// Eventos

document.querySelector('.button-play').addEventListener('click', playMusic); // playMusic -> função para tocar a música

document.querySelector('.button-pause').addEventListener('click', stopMusic);

document.querySelector('.random').addEventListener('click', random);

document.querySelector('.repeat').addEventListener('click', repeat);

music.addEventListener('timeupdate', refreshBar); // timeupdate -> evento que verifica se a música está tocando

document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--;

    if(indexMusic < 0) {
        indexMusic = 2;
    }

    renderMusic(indexMusic);

    playMusic();
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;

    if(indexMusic > 2) {
        indexMusic = 0;
    }

    renderMusic(indexMusic);

    playMusic();
});

// Funções

function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

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

function changeColor(div) {
    div.style.backgroundColor = 'rgb(99, 94, 94)';
    div.style.borderRadius = '50%';
}

function random() {
    let divRandom = document.querySelector('.random');

    changeColor(divRandom);
}

function repeat() {
    let divRepeat = document.querySelector('.repeat');

    changeColor(divRepeat);
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
