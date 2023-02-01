x = 0;
y = 0;
img ="";
draw_apple = "";
to_number="";
speak_data="";
function preload()
{
  img= loadImage("apple.png");
}


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 



    to_number=Number(content);
    if(Number.isInteger(to_number)) {
      document.getElementById("status").innerHTML = "Started drawing Apple";
      draw_apple="set";
      
} }


function setup() {
  canvas=createCanvas(900, 600);
  screen_width = window.innerWidth;
}



function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
      x= Math.floor(Math.random()*900);
      y= Math.floor(Math.random()*600);
      image(img, x, y, 50, 50);
     document.getElementById("status").innerHTML = to_number + " Apples drawn";
     speak_data = to_number + "Apples drawn";
     speak();
     draw_apple = "";
  }}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

