var siribtn = document.getElementById("siribtn");
var siri_waves = document.getElementById("siri-waves");
var siriReponse = document.getElementById("siritxt");

var asking;
var assistantStarted = "false";
var siriContainer = document.getElementById("response");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var val = "";
var grammer = "#JSGF V1.0;";
var recognition = new SpeechRecognition();
var speechRecognitionGrammerList = new SpeechGrammarList();
speechRecognitionGrammerList.addFromString(grammer, 1);

recognition.grammers = speechRecognitionGrammerList;
recognition.lang = "en-US";
recognition.interimResults = true;
recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  var final = event.results[0].isFinal;
  if (command.toLowerCase() === "yes" || command.toLowerCase() === "okay") {
    siriReponse.textContent = "Watch The Sphere 👁️";
  } else if (command.toLowerCase() === "no") {
    siriReponse.textContent = "You matter never give up on love 💔";
  } else {
    asking = "true";
    siriReponse.style.opacity = "0";
    siriReponse.style.animation = " ";
    siriReponse.classList.remove("animatesiri");
    siriReponse.style.opacity = "1";
    siriReponse.textContent = command;
  }
};
recognition.onspeechend = function () {
  if (asking === "true") {
    setTimeout(function () {
      siriReponse.style.opacity = "0";
      siriReponse.textContent = "Would you like me to wish you a Happy Valentines ?";
      siriReponse.style.opacity = "1";
      siribtn.style.opacity = "0";
      siri_waves.style.display = "block";
      recognition.start();
      asking = "false";
    }, 3500);
  }
  assistantStarted = "false";
  siri_waves.style.display = "none";
  siribtn.style.opacity = "1";
};
siribtn.addEventListener("click", function () {
  if (assistantStarted === "false") {
    assistantStarted = "true";
    siriReponse.classList.add("animatesiri");
    siribtn.style.opacity = "0";
    siri_waves.style.display = "block";
    recognition.start();
  } else {
    assistantStarted = "false";
    siribtn.style.opacity = "1";
    siri_waves.style.display = "none";
    recognition.stop();
  }
});
function appendSiri(val) {
  var element = document.createElement("h4");
  element.classList.add("siriuser");
  element.innerHTML = val;
  siriContainer.appendChild(element);
}
/*function arrivingSiri(val) {
  var element = document.createElement("h4");
  element.innerHTML = val;
  siriContainer.appendChild(element);
  recognition.stop();
}*/
