
function reply(transcript) {
    responsiveVoice.setDefaultVoice("UK English Female");
     
      if (transcript.toLowerCase().includes('how are you') || transcript.includes('are you fine') || transcript.includes('how are you doing today')) {
        var finalText = greeting[Math.floor(Math.random()*greeting.length)];
         responsiveVoice.speak(finalText);
         AIsend(finalText);
        }
     else if(timeQ.includes(transcript.toLowerCase())){
        var time = now.getHours() + " hours " + now.getMinutes() + " minutes. ";
        var finalText = "The time is "+time;
        responsiveVoice.speak(finalText);
        AIsend(finalText);
    }
    else if(dateQ.includes(transcript.toLowerCase())){
        var date = now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear();
        var finalText = "The date is "+date;
        responsiveVoice.speak(finalText);
        AIsend(finalText);

    }
    else if(dayQ.includes(transcript.toLowerCase())){
        var day = weekday[now.getDay()];
        var finalText = "Today is "+day;
        responsiveVoice.speak(finalText);
        AIsend(finalText);
    }
    else if(whoQ.includes(transcript.toLowerCase())){
        var finalText = "I am a personal assistant that is useful but \n unnamed because my dev went mad making me.";
        responsiveVoice.speak(finalText);
        AIsend(finalText);
    }
    else if(transcript.toLowerCase().endsWith('weather')){
        var city = transcript.split("weather").shift();
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+appkey;
        httpRequest(searchLink, parseIt);
    }

    else if(transcript.toLowerCase().includes('weather please')){
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

        else if(transcript.toLowerCase().endsWith('gif')){
            var tag = transcript.split("gif").shift();
            const giphy = {
                baseURL: "https://api.giphy.com/v1/gifs/",
                apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
                tag: tag,
                type: "random",
                rating: "pg-13",
                width: "100px",
                height: "100px"
            };
            let giphyURL = encodeURI(
                giphy.baseURL +
                    giphy.type +
                    "?api_key=" +
                    giphy.apiKey +
                    "&tag=" +
                    giphy.tag +
                    "&rating=" +
                    giphy.rating +
                    "&height=" +
                    giphy.height +
                    "&width=" +
                    giphy.weight
            );
            $('document').ready(function(){
                
                var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
        console.log(_giphy);
        const gif = document.createElement('img');
        gif.setAttribute('src', _giphy.image_original_url);
        console.log(_giphy.image_original_url);
        gif.setAttribute('style', 'max-width : 30vh; height: auto;');
        replymsg = document.createElement('div');
    replymsg.style.cssText ='padding : 2vh;';
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'gifs.gif');
    downloadLink.setAttribute('href', _giphy.image_original_url);
    downloadLink.style.cssText = 'background : white; color : red; font-size : 2vh; padding : 1vh; border-redius : 20px;';
    downloadLink.innerHTML = 'Download GIF';
    replymsg.setAttribute('id', 'recieved');
    replymsg.appendChild(gif);
    const br = document.createElement('br');
    replymsg.appendChild(br);
    replymsg.appendChild(downloadLink);
    messages.appendChild(replymsg);
    responsiveVoice.speak('one '+ tag +' GIF for you');
            };
            newGif();
        });
    }
    else if(transcript.toLowerCase().startsWith('google')){
        let searchQuery = transcript.toLowerCase().split("google ").pop().split(' ').join('+');
        let googleURL = 'https://www.google.com/search?q='+searchQuery;
        AIsend('Searching Google for '+searchQuery.split('+').join(' '));
        responsiveVoice.speak('Searching Google for '+searchQuery.split('+').join(' '));
        let searchWindow = window.open(googleURL, "", "width=800,height=600");
    }
     else{
         var finalText = "Couldn't get that."
         responsiveVoice.speak(finalText);
         AIsend(finalText);
     }
 }