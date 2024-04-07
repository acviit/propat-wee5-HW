const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let sunAngle = 0;
let earthAngle = 0;
let moonAngle = 0;

const sunSpeed = Math.PI / 200;
const earthSpeed = Math.PI / 150;
const moonSpeed = Math.PI / 100;

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sunX = canvas.width / 2;
    const sunY = canvas.height / 2;
    drawPlanet(sunX, sunY, 30, 'yellow');

    const earthX = sunX + Math.cos(sunAngle) * 200;
    const earthY = sunY + Math.sin(sunAngle) * 200;
    drawPlanet(earthX, earthY, 15, 'blue');

    const moonX = earthX + Math.cos(earthAngle) * 50;
    const moonY = earthY + Math.sin(earthAngle) * 50;
    drawPlanet(moonX, moonY, 5, 'gray');

    sunAngle += sunSpeed;
    earthAngle += earthSpeed;
    moonAngle += moonSpeed;

    requestAnimationFrame(draw);
}

function drawPlanet(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

draw();
