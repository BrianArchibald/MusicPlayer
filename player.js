
var songs = ['Song1.mp3', 'Song2.mp3','Song3.mp3'];
var poster = ['Poster1.jpg','Poster2.jpg','Poster3.jpg',];

var songTitle = document.getElementById('songTitle');
var fillBar = document.getElementById('fill');

//create an object for audio class

var song = new Audio();
var currentSong = 0; // points to current song

window.onload = playSong; // calls function when window loads

function playSong() {
	song.src = songs[currentSong]; // set source of 0th song
	songTitle.textContent = songs[currentSong];
	song.play(); // plays the song
}

function playOrPauseSong() {
	if(song.paused) {
		song.play();
		$('#play img').attr('src','Pause.png');
	} else {
		song.pause();
		$('#play img').attr('src','Play.png');
	}
}

song.addEventListener('timeupdate', function() {
	var position = song.currentTime / song.duration;
	fillBar.style.width
})