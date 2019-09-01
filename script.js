const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const recognition = new webkitSpeechRecognition();
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
 