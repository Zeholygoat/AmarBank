
import { banks } from './data.js';
import { score, explain } from './engine.js';

window.run = function(){
let user = {
role: document.getElementById("role").value,
priority: document.getElementById("priority").value,
deposit: Number(document.getElementById("deposit").value)||0
};

let ranked = banks.map(b=>({
...b,
score: score(b,user),
reasons: explain(b,user)
})).sort((a,b)=>b.score-a.score);

let res = document.getElementById("result");
res.innerHTML = "<h2>Recommendations</h2>";

ranked.forEach(b=>{
res.innerHTML += `
<div class="card">
<h3>${b.name}</h3>
<p><strong>Score:</strong> ${b.score.toFixed(2)}</p>
<p><strong>Best For:</strong> ${b.bestFor}</p>
<ul>${b.reasons.map(r=>"<li>"+r+"</li>").join("")}</ul>
</div>`;
