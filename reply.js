//arrays containing *very good* replies
const greeting = ["i am sick of you", "do you really care", "i am dying", "i am good you little dumb fellow"];
const weather = ["weather is fine, checked on accuweather.com", "just go out and check","i don't know dude"];
function reply(transcript) {
    responsiveVoice.setDefaultVoice("US English Male");
     if (transcript.includes(("how"||"what"||"today")&&"weather")){
        const finalText  = weather[Math.floor(Math.random()*weather.length)];
         responsiveVoice.speak(finalText);
     }
     else if (transcript.includes("how are you"||"how is it going"||"are you fine")) {
        const finalText = greeting[Math.floor(Math.random()*greeting.length)];
         responsiveVoice.speak(finalText);
     }
     else{
         responsiveVoice.speak("Couldn't get that. Please seek my dev for this");
     }
 }