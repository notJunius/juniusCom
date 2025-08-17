const audio = document.getElementById('song');
const toggleButton = document.getElementById('playpause');


function toggleSong() {
	if (audio.paused) {
		audio.play(); // Start playback if paused
	} else {
		audio.pause(); // Pause playback if playing
	}
};
toggleButton.addEventListener('click', toggleSong);

