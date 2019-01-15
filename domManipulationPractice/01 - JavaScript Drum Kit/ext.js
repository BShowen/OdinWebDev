
// Play instrument when key pressed, begin key animation
function playSound(e) {
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
    // Animate button on key press
    key.classList.add("playing");
}

// Remove animation from key
function removeTransition(e) {
    // Filter out all unecessary transitions
    if (e.propertyName !== 'transform') return;
    
    // REmove the playing class the key that calls this function
    this.classList.remove('playing');
}


// Listen for a keydown event across all of the window/page
window.addEventListener("keydown", playSound);

// Remove animation from key - first find each each on page
const keys = document.querySelectorAll(".key");
// Listen for a transition end on each key, so that we can remove the playing class
keys.forEach(key => key.addEventListener("transitionend", removeTransition));