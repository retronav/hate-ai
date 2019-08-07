//arrays containing *very good* replies
const greeting = ["i am sick of you", "i know you want to flatter me now", "i am dying", "i am good you little dumb fellow"];
const weather = ["weather is fine, checked on accuweather.com", "just go out and check","i don't know dude"];
function reply(transcript) {
    responsiveVoice.setDefaultVoice("UK English Female");
     if (transcript.includes(("how"||"what"||"today")&&"weather")){
        const finalText  = weather[Math.floor(Math.random()*weather.length)];
         responsiveVoice.speak(finalText);
     }
     else if (transcript.includes('how are you') || transcript.includes('are you fine') || transcript.includes('how are you doing today')) {
        const finalText = greeting[Math.floor(Math.random()*greeting.length)];
         responsiveVoice.speak(finalText);
     }

     else{
         responsiveVoice.speak("Couldn't get that.");
     }
 }