import {banks} from './data.js';
import {score} from './engine.js';

window.run = function(){

bar.style.width="100%";

let user = {
role: role.value,
priority: priority.value
};

let ranked = banks.map(b => ({
...b,
score: score(b,user)
})).sort((a,b)=>b.score-a.score);

results.innerHTML="<h2>Top Matches</h2>";

ranked.slice(0,5).forEach(b=>{
results.innerHTML += `
<div class="card">
<h3>${b.name} <span class="badge">${b.bestFor}</span></h3>
<p>Score: ${b.score.toFixed(2)}</p>
<p>FDR: ${b.fdr}%</p>
</div>`;
});
}
