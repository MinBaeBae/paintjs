const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPaining() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(e) {
	const x = e.offsetX;
	const y = e.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function onMouseDown(e) {
	painting = true;
}

function handleColorClick(e) {
	const color = e.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPaining);
	canvas.addEventListener("mouseleave", stopPaining);
}

Array.from(colors).forEach((color) =>
	color.addEventListener("click", handleColorClick)
);
