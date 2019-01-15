
// Listen for a keydown event across all of the window/page
window.addEventListener("keydown", function(e) {
    // declare an audio  var to store the proper key with the correct data-key attribute 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Declare a key var to access divs with a class of key
    const key = document .querySelector(`.key[data-key="${e.keyCode}"]`);

    // Account for a key not having a data-key attribute
    if (!audio) { return };

    // Account for fast key presses by rewinding the audio clip to the beginning, 
    // else the sound will not play until the previous clip has finished
    audio.currentTime = 0;

    // play the audio file
    audio.play();


    // console.log(audio);
});