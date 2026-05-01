export function renderOptions(step, handle){
const q = document.getElementById("question");
const opt = document.getElementById("options");

q.innerText = step.question;
opt.innerHTML = "";

step.options.forEach(o=>{
let btn = document.createElement("button");
btn.innerText = o.text;
btn.onclick = ()=>handle(o.val);
opt.appendChild(btn);
});
}

export function renderResults(list){
const res = document.getElementById("results");
res.classList.remove("hidden");
res.innerHTML = "<h2>Results</h2>";

list.forEach(b=>{
res.innerHTML += `<div class="card">
<h3>${b.name}</h3>
<p>Score: ${b.score.toFixed(2)}</p>
<p>FDR: ${b.fdr}%</p>
</div>`;
});
}
