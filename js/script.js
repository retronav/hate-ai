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

 function httpRequest(url, callback)
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
/* Function for sending messages*/
const AIsend = (finalText) => {
    replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
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
function gifDownload(url, fileName){
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "blob";
xhr.onload = function(){
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    const downloadLink = document.createElement('a');
downloadLink.style.cssText = 'background : white; color : red; font-size : 2vh; padding : 1vh; border-redius : 20px;';
downloadLink.innerHTML = 'Download GIF';
downloadLink.href = imageUrl;
downloadLink.download = fileName;
    replymsg.appendChild(downloadLink);
    downloadLink.click();
    replymsg.removeChild(downloadLink);
}
xhr.send();
}
/** Cookie function to get User's name */
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
     const text = "Welcome, "+user+". What can I do for you?";
     AIsend(text);
     responsiveVoice.speak(text);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }