var btn = document.querySelector('.talk');
var content = document.querySelector('.content');

var greetings = ["I am good dummy", "Do not strain me homeboi", "Just eat cake and let me sleep"];                          
var weather = ["why do you care, you never leave the house", "i am tired, ask google", "i dont know"]


var SpeechRecognition = window.SpeechRecognition();
var recognition = new SpeechRecognition;

recognition.onstart = function () {
    console.log("voice is activited, now speak dummy");
};
recognition.onresult = function (event) {
   var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(transcript){
	const speech = new SpeechSynthesisUtterance();
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
	speech.text = transcript;
    speech.lang = "en-US";
    speech.voice = "Gooogle UK English Female";
}