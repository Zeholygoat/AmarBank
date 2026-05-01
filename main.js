import { banks } from './data.js';
import { scoreBank } from './engine.js';
import { renderOptions, renderResults } from './ui.js';

let user = {};
let stepIndex = 0;

const steps = [
{
question:"Your Role?",
options:[
{text:"Student", val:"student"},
{text:"Professional", val:"pro"}
]
},
{
question:"Priority?",
options:[
{text:"High Interest", val:"savings"},
{text:"Tech", val:"tech"}
]
}
];

function next(val){
if(stepIndex === 0) user.role = val;
if(stepIndex === 1) user.priority = val;

stepIndex++;

if(stepIndex < steps.length){
renderOptions(steps[stepIndex], next);
} else {
run();
}
}

function run(){
let ranked = banks.map(b=>{
return { ...b, score: scoreBank(b, user) };
}).sort((a,b)=>b.score-a.score);

renderResults(ranked);
}

renderOptions(steps[0], next);
