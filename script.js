document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    var hearts = document.querySelectorAll('.heart');
    hearts.forEach(function(heart) {
        heart.addEventListener('click', function() {
            heart.classList.toggle('filled');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () 
{

    var songs = document.querySelectorAll('.song');

    songs.forEach(function (song) 
    {
        var songName = song.querySelector('td:first-child');

        songName.addEventListener('click', function ()
        {
            var audio = document.getElementById('audio');
            var audioSource = document.getElementById('audioSource');
            var audioId = song.getAttribute('data-audio');
            audioSource.src = audioId + '.mp3';
            audio.load();
            audio.play();
            songs.forEach(function (s) {
                var sName = s.querySelector('td:first-child');
                sName.classList.remove('playing');
            });
            songName.classList.add('playing');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var songs = document.querySelectorAll('.song');
    var playingSong = document.getElementById('playingSong');

    songs.forEach(function (song) {
        var songName = song.querySelector('td:first-child');

        songName.addEventListener('click', function () {
            var audio = document.getElementById('audio');
            var audioSource = document.getElementById('audioSource');
            var audioId = song.getAttribute('data-audio');
            audioSource.src = audioId + '.mp3';
            audio.load();
            audio.play();
            playingSong.textContent = songName.textContent; // Set playing song text
            songs.forEach(function (s) {
                var sName = s.querySelector('td:first-child');
                sName.classList.remove('playing');
            });
            songName.classList.add('playing');
        });
    });
});
