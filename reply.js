
function reply(transcript) {
    responsiveVoice.setDefaultVoice("UK English Female");
     
      if (transcript.includes('how are you') || transcript.includes('are you fine') || transcript.includes('how are you doing today')) {
        var finalText = greeting[Math.floor(Math.random()*greeting.length)];
         responsiveVoice.speak(finalText);
         replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
        }
     else if(timeQ.includes(transcript)){
        var time = now.getHours() + " hours " + now.getMinutes() + " minutes. ";
        var finalText = "The time is "+time;
        responsiveVoice.speak(finalText);
        replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
    }
    else if(dateQ.includes(transcript)){
        var date = now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear();
        var finalText = "The date is "+date;
        responsiveVoice.speak(finalText);
    replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);

    }
    else if(dayQ.includes(transcript)){
        var day = weekday[now.getDay()];
        var finalText = "Today is "+day;
        responsiveVoice.speak(finalText);
    replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
    }
    else if(whoQ.includes(transcript)){
        var finalText = "I am a personal assistant that is useful but \n unnamed because my dev went mad making me.";
        responsiveVoice.speak(finalText);
    replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
    }
    else if(transcript.endsWith('weather')){
        var city = transcript.split("weather").shift();
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+appkey;
        httpRequestAsync(searchLink, parseIt);
    }

    else if(transcript.includes('weather please')){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                let GeoWurl = "api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+appkey;
                console.log(GeoWurl);
                httpRequest(GeoWurl, parseIt);
              });
          } else {
              var finalText =  "Couldn't acquire your location.";
            replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
          }
    }

     else{
         var finalText = "Couldn't get that."
         responsiveVoice.speak(finalText);
        replymsg = document.createElement('div');
    replymsg.setAttribute('id', 'recieved');
    replymsg.textContent= finalText;
    messages.appendChild(replymsg);
     }
 }
