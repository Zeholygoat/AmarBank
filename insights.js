
import { banks } from './data.js';

const c = document.getElementById("chart");
const ctx = c.getContext("2d");

c.width = 600;
c.height = 300;

let total = 0;

banks.forEach((b,i)=>{
let h = b.fdr * 20;
ctx.fillRect(i*120, 300-h, 50, h);
ctx.fillText(b.name, i*120, 290);
total += b.fdr;
});

let avg = total / banks.length;
document.getElementById("stats").innerText = "Average FDR: " + avg.toFixed(2);
