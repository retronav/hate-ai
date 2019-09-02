const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interinResults = true;
recognition.onstart = function () {
    console.log("Now you can microphonee");
}

recognition.onresult = function (event) {
    var current = event.resultIndex;
     var transcript = event.results[current][0].transcript;
     content.textContent = transcript;
     reply(transcript);
 }
 var appkey = "f98bb9fb990c53469a7e7f8d8b8bb426";

 document.getElementById("typeb").addEventListener("click", function(){
    transcript = document.getElementById("typer").value;
    content.textContent = transcript;
    reply(transcript);
});
document.getElementById("typer").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    transcript = document.getElementById("typer").value;
    content.textContent = transcript;
    reply(transcript);
    }
});
 