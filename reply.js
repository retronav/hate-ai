//arrays containing *very good* replies

function reply(transcript) {
    responsiveVoice.setDefaultVoice("UK English Female");
     if (transcript.includes(("how"||"what"||"today")&&"weather")){
        var finalText  = weather[Math.floor(Math.random()*weather.length)];
         responsiveVoice.speak(finalText);
         document.getElementById("replx").innerHTML= finalText;
        }
     else if (transcript.includes('how are you') || transcript.includes('are you fine') || transcript.includes('how are you doing today')) {
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


     else{
         var finalText = "Couldn't get that."
         responsiveVoice.speak(finalText);
         document.getElementById("replx").innerHTML= finalText;
     }
 }