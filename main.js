x = 0;
y = 0;
speak_data = "";
screen_width = 0;
screen_height = 0;
draw_apple ="";
apple = "";
function preload()
{
 apple = loadImage ("apple.png");
}

    to_number = 0;
    if(Number.isInteger(to_number));

draw_apple = "";

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

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
screen_width = "0";
screen_height = "0";

    var apple;
    apple = "";
    var speak_data
    speak_data ="";
    function preload();
    to_number = Number(content);
    if(Number.isInteger(to_number));
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    createCanvas() 
    screen_width = 150;
    screen_height = 150;
    canvas.position()
    draw()
    draw_apple = "set";
    for(var i = 1; i <= to_number; i++);
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400 );
      document.getElementById("status").innerHTML = to_number + "Apples drawn";
    }
}
