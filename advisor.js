import { banks } from './data.js';
import { score } from './engine.js';

window.run = function(){

const progress = document.getElementById("bar");
const results = document.getElementById("results");

const user = {
role: document.getElementById("role").value,
priority: document.getElementById("priority").value
};

progress.style.width = "100%";

let ranked = banks.map(b => ({
...b,
score: score(b,user)
})).sort((a,b)=>b.score-a.score);

results.innerHTML = `
<h2 class="section-title">Top Recommendations</h2>
<p class="section-sub">AI-powered financial matches based on your profile.</p>
`;

ranked.slice(0,5).forEach((b,index)=>{

let confidence = Math.min(99, Math.floor(b.score * 2));

let reason = "Strong overall performance.";

if(user.priority === "tech"){
reason = "Excellent digital banking ecosystem and app experience.";
}

if(user.priority === "cards"){
reason = "High-value card benefits and premium rewards.";
}

if(user.priority === "interest"){
reason = "Competitive savings and FDR returns.";
}

results.innerHTML += `
<div class="card recommendation fade-in">

<h3>
#${index+1} ${b.name}
<span class="badge">${b.bestFor}</span>
</h3>

<div class="score-circle">${confidence}%</div>

<p class="reason">${reason}</p>

<div class="progress">
<div class="progress-bar" style="width:${confidence}%"></div>
</div>

<div class="grid">
<div class="metric-box">
<p>FDR Rate</p>
<h3>${b.fdr}%</h3>
</div>

<div class="metric-box">
<p>Tech Score</p>
<h3>${b.tech}/10</h3>
</div>

<div class="metric-box">
<p>Card Score</p>
<h3>${b.cards}/10</h3>
</div>

<div class="metric-box">
<p>ATM Access</p>
<h3>${b.atm}/10</h3>
</div>
</div>

<a href="${b.website}" target="_blank" class="bank-link">
Visit Official Website
</a>

</div>
`;
});
}
