const pianoKeys = document.querySelectorAll(".Piano-keys .Key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysChechbox = document.querySelector(".keys-checkbox input");


let allKeys = [],
    audio = new Audio(`tunes/d.wav`);// by default, audio src is "d" tune

const playTune = (Key) => {
    audio.src = `tunes/${Key}.wav`;
    audio.play();//playing audio

    const clickedKey = document.querySelector(`[data-Keys="${Key}"]`);//getting clicked key element
    clickedKey.classList.add("active");//adding active class to the clicked key element
    setTimeout(() => { //removing active vlass after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(Key => {
    allKeys.push(Key.dataset.keys);//adding data-Keys value to the allKeys array
    //calling playtune function with passing data-key value as an argument
    Key.addEventListener("click", () => playTune(Key.dataset.keys));
});
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
const showHideKeys = () => {
    //toggling hide class from each key on the checkBox click
    pianoKeys.forEach(Keys => Keys.classList.toggle("hide"));
}
const pressedKey = (e) => {
    //if the pressed key  is in the allkeys array, only call the playTune function888888888888
    if (allKeys.includes(e.key)) playTune(e.key);
}

keysChechbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);