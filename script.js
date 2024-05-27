document.addEventListener('DOMContentLoaded', function() {
    const birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play();
});

document.getElementById('revealButton').addEventListener('click', function() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.toggle('hidden');
});
