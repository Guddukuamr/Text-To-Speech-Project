let speech = new SpeechSynthesisUtterance();

let voice = [];

let voiceSelected = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () =>{
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];

    voice.forEach((voice, i) => (voiceSelected.options[i] = new Option(voice.name, i)));
};

voiceSelected.addEventListener('change',() => {
    speech.voice = voice[voiceSelected.value];
});


document.querySelector('button').addEventListener('click',() => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});