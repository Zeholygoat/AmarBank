export function scoreBank(bank, user){
let score = 0;
if(bank.type.includes(user.role)) score += 2;
if(bank.features.includes(user.priority)) score += 2;
score += bank.fdr;
return score;
}
