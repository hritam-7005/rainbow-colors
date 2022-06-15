var top = 0;
var left = 0;
const circles  = document.getElementsByClassName("circle");
function setPos() {
    for (var i = 0; i<15;i++) {
        var t = 0;
        t = Math.floor(Math.random() * 90);
        left = Math.floor(Math.random() * 90);
        circles[i].style.top = t+"%";
        circles[i].style.left = left+"%";
    }
}
setInterval(glide, 1000);
function glide() {
    var i = 0;
    var j = 0;
    var k = 0;
    var t = 0;
    i = Math.floor(Math.random() * 15);
    j = Math.floor(Math.random() * 15);
    k = Math.floor(Math.random() * 15);
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[i].style.top = t+"%";
    circles[i].style.left = left+"%";
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[j].style.top = t+"%";
    circles[j].style.left = left+"%";
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[k].style.top = t+"%";
    circles[k].style.left = left+"%";
}
function colorChange() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    redValue.value = red;
    greenValue.value = green;
    blueValue.value = blue;
    document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}
function colorChangeAio() {
    var aioSlider = document.getElementById("aio");
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var aio = aioSlider.value;
    redSlider.value = aio;
    greenSlider.value = aio;
    blueSlider.value = aio;
    colorChange();
}
function colorChangeNI() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redValue.value;
    var green = greenValue.value;
    var blue = blueValue.value;
    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;
    document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}