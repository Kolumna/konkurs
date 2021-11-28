let canvas = document.getElementById("menu");
let menuCtx = canvas.getContext("2d");

menuCtx.font = "128px VT323, Arial";
menuCtx.fillStyle = "white";
menuCtx.textAlign = "center";
menuCtx.fillText("START", canvas.width/2, canvas.height/2);
menuCtx.shadowColor="black";
menuCtx.shadowBlur=1;
menuCtx.lineWidth=2;
menuCtx.strokeText("START",canvas.width/2, canvas.height/2);
menuCtx.shadowBlur=0;
menuCtx.fillStyle="white";

document.getElementById("menu").onclick = function () 
{
    location.href = "poziom1/gra.html";
}