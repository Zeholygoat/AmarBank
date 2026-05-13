export function score(bank,user){

let s = 0;

if(bank.type.includes(user.role) || bank.type.includes("all")){
s += 3;
}

s += bank.fdr * 2;

if(user.priority === "tech"){
s += bank.tech * 1.5;
}

if(user.priority === "cards"){
s += bank.cards * 1.5;
}

if(user.priority === "interest"){
s += bank.fdr * 1.5;
}

return s;
}
