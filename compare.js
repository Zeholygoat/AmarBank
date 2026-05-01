
import { banks } from './data.js';

const t = document.getElementById("table");

t.innerHTML = "<tr><th>Bank</th><th>FDR</th><th>Tech</th><th>Cards</th><th>ATM</th></tr>";

banks.forEach(b=>{
t.innerHTML += `<tr>
<td>${b.name}</td>
<td>${b.fdr}</td>
<td>${b.tech}</td>
<td>${b.cards}</td>
<td>${b.atm}</td>
</tr>`;
});
