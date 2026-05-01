
import { banks } from './data.js';
import { score } from './engine.js';

const el = document.getElementById("topBanks");

let ranked = banks.map(b => ({...b, score: score(b,{role:"pro",priority:"interest",deposit:0})}))
.sort((a,b)=>b.score-a.score);

ranked.forEach(b=>{
el.innerHTML += `<div class="card">
<h3>${b.name}</h3>
<p>Score: ${b.score.toFixed(2)}</p>
</div>`;
});
