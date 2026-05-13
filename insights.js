import { banks } from './data.js';

const c = document.getElementById("chart");
const ctx = c.getContext("2d");

c.width = 1200;
c.height = 500;

let total = 0;

banks.forEach((b,i)=>{

let h = b.fdr * 28;

ctx.fillStyle = '#00d084';
ctx.fillRect(i*120 + 40, 450-h, 60, h);

ctx.fillStyle = '#ffffff';
ctx.font = '14px Arial';

ctx.fillText(b.name, i*120 + 20, 480);
ctx.fillText(b.fdr + '%', i*120 + 30, 440-h);

total += b.fdr;

});

let avg = total / banks.length;

document.getElementById("stats").innerText = avg.toFixed(2) + '%';
