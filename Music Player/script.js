// Get elements
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const songTitle = document.querySelector(".song-title");
const artistName = document.querySelector(".artist-name");

// Example song list
const songs = [
    { title: "Song 1", artist: "Artist 1", src: "song1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "song2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "song3.mp3" },
];

let currentSongIndex = 0;

// Update the audio source and song info
function loadSong(song) {
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

// Play or pause the song
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play";
    }
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Seek to a new position in the song
progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Skip to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}

// Go to the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}

// Event listeners for buttons
playButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);

// Initialize the player with the first song
loadSong(songs[currentSongIndex]);
