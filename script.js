let messages = document.querySelector('#messages');
let typer = document.querySelector('#typer');
let textb = document.querySelector('#textb');
let msgsent = document.createElement('div');
let replymsg = document.createElement('div');
let appkey = "f98bb9fb990c53469a7e7f8d8b8bb426";
//typing feature
textb.addEventListener('click', function(){
    const transcript = typer.value;
    msgsent = document.createElement('div');
msgsent.setAttribute('id', 'sent');
msgsent.textContent = transcript;
messages.appendChild(msgsent);
reply(transcript);
});

//voice feature
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interinResults = true;
recognition.onstart = function () {
    console.log("Now you can microphonee");
}

recognition.onresult = function (event) {
    var current = event.resultIndex;
     var transcript = event.results[current][0].transcript;
     msgsent = document.createElement('div');
msgsent.setAttribute('id', 'sent');
msgsent.textContent = transcript;
messages.appendChild(msgsent);
     reply(transcript);
 }

 function httpRequestAsync(url, callback)
 {
   console.log("JSON loaded");
     var httpRequest = new XMLHttpRequest();
     httpRequest.onreadystatechange = () => { 
         if (httpRequest.readyState == 4 && httpRequest.status == 200)
             callback(httpRequest.responseText);
     }
     httpRequest.open("GET", url, false); 
     httpRequest.send();
     httpRequest.suppressDeprecationWarnings = true;
     if(httpRequest.status == 404 || httpRequest.status == 400){
        var warn404 = "I'm afraid your city couldn't be found."
        responsiveVoice.speak(warn404);
        replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= warn404;
    messages.appendChild(replymsg);

     }
 }

 function parseIt(response) {    
    let jsonObject = JSON.parse(response);
    var name = jsonObject.name;
    var temp = parseInt(jsonObject.main.temp - 273) + "° C";
    var desc = jsonObject.weather[0].description;
    var humidity= jsonObject.main.humidity + "%";
var finalText = name + " has temperature of "+ temp + " and humidity is " +humidity+ ". It is currently experiencing "+desc+".";
    replymsg = document.createElement('div');
replymsg.setAttribute('id', 'recieved');
replymsg.textContent= finalText;
messages.appendChild(replymsg);
    responsiveVoice.speak(finalText);
}
