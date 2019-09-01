//arrays containing *very good* replies

function reply(transcript) {
    responsiveVoice.setDefaultVoice("UK English Female");
     
      if (transcript.includes('how are you') || transcript.includes('are you fine') || transcript.includes('how are you doing today')) {
        var finalText = greeting[Math.floor(Math.random()*greeting.length)];
         responsiveVoice.speak(finalText);
         document.getElementById("replx").innerHTML= finalText;
        }
     else if(timeQ.includes(transcript)){
        var time = now.getHours() + " hours " + now.getMinutes() + " minutes. ";
        var finalText = "The time is "+time;
        responsiveVoice.speak(finalText);
        document.getElementById("replx").innerHTML= finalText;
    }
    else if(dateQ.includes(transcript)){
        var date = now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear();
        var finalText = "The date is "+date;
        responsiveVoice.speak(finalText);
        document.getElementById("replx").innerHTML= finalText;

    }
    else if(dayQ.includes(transcript)){
        var day = weekday[now.getDay()];
        var finalText = "Today is "+day;
        responsiveVoice.speak(finalText);
        document.getElementById("replx").innerHTML= finalText;
    }
    else if(whoQ.includes(transcript)){
        var finalText = "I am a personal assistant that is useful but unnamed because my dev went mad making me.";
        responsiveVoice.speak(finalText);
        document.getElementById("replx").innerHTML= finalText;
    }
    else if(transcript.endsWith('weather')){
        var city = transcript.split("weather").shift();
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+appkey;
        function theResponse(response) {    
            let jsonObject = JSON.parse(response);
            var name = jsonObject.name;
            var temp = parseInt(jsonObject.main.temp - 273) + "° C";
            var desc = jsonObject.weather[0].description;
            var humidity= jsonObject.main.humidity + "%";
            document.getElementById("replx").innerHTML = name + " has temperature of "+ temp + " and humidity is " +humidity+ ". It is currently experiencing "+desc+".";
            var finalText = document.getElementById("replx").textContent;
            responsiveVoice.speak(finalText);
        }
    function httpRequestAsync(url, callback)
 {
   console.log("loaded");
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
        document.getElementById("replx").innerHTML = warn404;
     }
 }
        httpRequestAsync(searchLink, theResponse);
    }

     else{
         var finalText = "Couldn't get that."
         responsiveVoice.speak(finalText);
         document.getElementById("replx").innerHTML= finalText;
     }
 }