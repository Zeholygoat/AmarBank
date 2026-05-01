
export function score(bank, user){
let s = 0;

if(bank.type.includes(user.role)) s += 3;
s += bank.fdr;

if(user.priority === "tech") s += bank.tech;
if(user.priority === "cards") s += bank.cards;
if(user.priority === "interest") s += bank.fdr;

if(user.deposit > 500000) s += 2;

return s;
}

export function explain(bank, user){
let reasons = [];

if(bank.type.includes(user.role)) reasons.push("Matches your profile");
if(user.priority === "tech") reasons.push("Strong technology offering");
if(user.priority === "cards") reasons.push("Strong card benefits");
if(user.priority === "interest") reasons.push("High interest returns");

return reasons;
}
