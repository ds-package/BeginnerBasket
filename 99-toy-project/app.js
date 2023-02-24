const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 720;

const colors = ["#ff3838", "#ffb8b8", "#c56cf0", "#fff200", "#32ff7e"];

ctx.rect(0, 0, 500, 720);
ctx.fillStyle = "#658B6F";
ctx.fill();

ctx.beginPath();
ctx.ellipse(250, 80, 250, 80, Math.PI, 0, 2 * Math.PI);
ctx.ellipse(250, 290, 250, 140, Math.PI, 0, 2 * Math.PI);
ctx.ellipse(250, 490, 250, 65, Math.PI, 0, 2 * Math.PI);
ctx.ellipse(250, 635, 250, 85, Math.PI, 0, 2 * Math.PI);
// ctx.globalCompositeOperation = "destination-out";
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

ctx.beginPath();
ctx.font = "11px Montserrat, sans-serif";
ctx.fillStyle = "#bdd99e";
ctx.fillText("Rolling paper", 10, 165);
ctx.fillText("VVnagyeong", 415, 165);
ctx.fillText("2019", 10, 420);
ctx.fillText("12/13.ver", 440, 420);
