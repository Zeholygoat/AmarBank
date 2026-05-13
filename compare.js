import { banks } from './data.js';
const t = document.getElementById("t");
const search = document.getElementById("search");
function render(data){
t.innerHTML =
`
<tr>
<th>Bank</th>
<th>FDR</th>
<th>Tech</th>
<th>Cards</th>
<th>ATM</th>
<th>Best For</th>
</tr>
`
;
data.forEach(b=>{
t.innerHTML +=
`
<tr>
<td>${b.name}</td>
<td>${b.fdr}%</td>
<td>${b.tech}/10</td>
<td>${b.cards}/10</td>
<td>${b.atm}/10</td>
<td>${b.bestFor}</td>
</tr>`;
  });
}
render(banks);
search.addEventListener('input',()=>{
const filtered = banks.filter(b=>
b.name.toLowerCase().includes(search.value.toLowerCase())
);
render(filtered);
});
