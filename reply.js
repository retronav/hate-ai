function reply(transcript) {
    responsiveVoice.setDefaultVoice("US English Male");
     if (transcript.includes(("how"||"what"||"today")&&"weather")){
         responsiveVoice.speak("i don't care dude");
     }
     else{
         responsiveVoice.speak("Couldn't get that. Please seek my dev for this");
     }
 }