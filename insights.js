import { banks } from './data.js';
const c = document.getElementById("chart");
const ctx = c.getContext("2d");
c.width = 1200;
c.height = 500;
let total = 0;
banks.forEach((b,i)=>{
let h = b.fdr * 28;
ctx.fillStyle = '#00d084';
ctx.fillRect(i*42 + 40, 450-h, 26, h);
ctx.fillStyle = '#ffffff';
ctx.font = '12px Inter';
ctx.fillText(b.name, i*42 + 20, 470);
ctx.fillText(b.fdr + '%', i*42 + 30, 440-h);
total += b.fdr;
});
let avg = total / banks.length;
document.getElementById("stats").innerText = avg.toFixed(2) + '%';
