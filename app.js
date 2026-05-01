// DATABASE: 30 BANKS
const banks = [
    { name: "City Bank", savings: "5.5%", fdr: "10.5%", type: ["pro", "women"], bestFor: "Credit Cards", features: ["Amex Cards", "Airport Lounge", "CityTouch App", "Priority Banking", "Cashback", "0% EMI"] },
    { name: "Dutch-Bangla Bank", savings: "4.0%", fdr: "9.5%", type: ["student", "all"], bestFor: "ATM Network", features: ["Largest ATM Grid", "NexusPay", "Rocket", "Student Cards", "Agent Banking", "Wide Reach"] },
    { name: "BRAC Bank", savings: "5.0%", fdr: "10.2%", type: ["pro", "women"], bestFor: "Customer Service", features: ["TARA for Women", "Astromobile", "SME Loans", "High Security", "Global Alliance", "Reliability"] },
    { name: "Eastern Bank (EBL)", savings: "5.2%", fdr: "10.0%", type: ["pro", "student"], bestFor: "Travel & Tech", features: ["Skybanking", "Dual Currency", "Aqua Card", "Fast Onboarding", "Insta-Account", "Lifestyle Offers"] },
    { name: "Standard Chartered", savings: "3.5%", fdr: "8.5%", type: ["pro"], bestFor: "International", features: ["Global Access", "Signature Cards", "Priority Centers", "Safe Vaults", "Offshore Banking", "Global Trust"] },
    { name: "Islami Bank", savings: "4.5%", fdr: "10.1%", type: ["all", "nrb"], bestFor: "Shariah Banking", features: ["CellFin", "Hajj Savings", "Large Branch Network", "Shariah Compliant", "Microfinance", "Remittance Leader"] },
    { name: "MTB", savings: "5.7%", fdr: "10.7%", type: ["pro"], bestFor: "Premium Banking", features: ["Privilege Access", "Air Lounge", "Flexi-Pay", "Smart Banking", "Dedicated Manager", "Luxury Travel"] },
    { name: "Bank Asia", savings: "5.0%", fdr: "10.0%", type: ["nrb", "all"], bestFor: "Agent Banking", features: ["Post Office Banking", "Smart App", "MSME Support", "Wide Village Reach", "Remittance", "Islamic Windows"] },
    { name: "United Commercial Bank", savings: "5.1%", fdr: "10.3%", type: ["pro", "all"], bestFor: "Imperial Banking", features: ["Upay App", "Signature Cards", "Corporate Focus", "SME Excellence", "Large Branch Net", "Quick Cash"] },
    { name: "Prime Bank", savings: "5.3%", fdr: "10.4%", type: ["pro"], bestFor: "Investments", features: ["Altitude Cards", "MyPrime App", "Home Loans", "Education Finance", "Investment Desk", "Car Loans"] },
    { name: "IFIC Bank", savings: "5.5%", fdr: "10.5%", type: ["all"], bestFor: "Micro-Saving", features: ["Aamar Account", "Neighborhood Banking", "Easy Deposits", "Instant Cards", "Shohoj Account", "Small Loans"] },
    { name: "HSBC", savings: "3.0%", fdr: "8.0%", type: ["pro"], bestFor: "Expat Service", features: ["Global Portfolio", "Premier Status", "Secure Key", "Expat Support", "Investment Funds", "High Wealth"] },
    { name: "Trust Bank", savings: "5.4%", fdr: "10.3%", type: ["pro"], bestFor: "Security", features: ["Defense Personnel Perks", "Mobile App", "Dual Cards", "High Safety", "Trust Money", "Easy Credits"] },
    { name: "Pubali Bank", savings: "4.8%", fdr: "9.8%", type: ["all"], bestFor: "Network Size", features: ["Oldest Private Bank", "Branch Density", "PIBI App", "Reliable Service", "Legacy Trust", "Personal Loans"] },
    { name: "NCC Bank", savings: "5.5%", fdr: "10.6%", type: ["pro", "all"], bestFor: "Remittance", features: ["Instant Transfer", "SME Focus", "Visa Gold", "NCC Bank App", "Monthly Savings", "Credit Facilities"] },
    { name: "Jamuna Bank", savings: "5.2%", fdr: "10.4%", type: ["all"], bestFor: "Quick Loans", features: ["Education Loans", "Islamic Windows", "Next Gen Banking", "Personal Finance", "Branch Service", "Quick Approval"] },
    { name: "Mercantile Bank", savings: "5.3%", fdr: "10.5%", type: ["pro"], bestFor: "Corporate", features: ["Rainbow App", "Credit Cards", "Export Support", "Trade Finance", "Business Support", "Retail Loans"] },
    { name: "Social Islami Bank", savings: "4.7%", fdr: "10.2%", type: ["all"], bestFor: "Charity Banking", features: ["Cash Waqf", "Hajj Finance", "Remittance Card", "SND Account", "Shariah Service", "Easy DPS"] },
    { name: "Dhaka Bank", savings: "5.2%", fdr: "10.4%", type: ["pro"], bestFor: "Trade Finance", features: ["Dhaka Bank Go", "Corporate Suite", "Trade Support", "Retail Credit", "Salary Accounts", "Premium Cards"] },
    { name: "AB Bank", savings: "5.0%", fdr: "10.1%", type: ["all"], bestFor: "Legacy Banking", features: ["AB Direct", "First Private Bank", "Fixed Income", "Investment Advice", "SME Focus", "Card Benefits"] }
    // ... Add more to reach 30 as needed
];

let userAnswers = {};

const steps = [
    { 
        id: "role", 
        question: "1. What is your primary role?", 
        options: [
            { text: "Student", val: "student" },
            { text: "Salaried Professional", val: "pro" },
            { text: "Business Owner", val: "pro" },
            { text: "Woman Professional", val: "women" },
            { text: "Expatriate/NRB", val: "nrb" }
        ] 
    },
    { 
        id: "priority", 
        question: "2. What is your main priority?", 
        options: [
            { text: "High Interest (Savings)", val: "savings" },
            { text: "Tech & App Experience", val: "tech" },
            { text: "Best Credit Cards", val: "cards" },
            { text: "ATM Accessibility", val: "atm" }
        ] 
    }
];

let currentStepIndex = 0;

function renderStep() {
    const step = steps[currentStepIndex];
    document.getElementById('step-title').innerText = step.question;
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';

    step.options.forEach(opt => {
        grid.innerHTML += `<button class="tile" onclick="handleChoice('${step.id}', '${opt.val}')">${opt.text}</button>`;
    });
}

function handleChoice(key, val) {
    userAnswers[key] = val;
    currentStepIndex++;
    if (currentStepIndex < steps.length) {
        renderStep();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('step-ui').classList.add('hidden');
    document.getElementById('result-ui').classList.remove('hidden');
    const resultList = document.getElementById('result-list');
    
    // Logic for filtering
    const filtered = banks.filter(b => b.type.includes(userAnswers.role) || b.type.includes("all"));

    filtered.slice(0, 5).forEach(bank => {
        resultList.innerHTML += `
            <div class="result-card">
                <h3>${bank.name}</h3>
                <p><strong>Recommended for:</strong> ${bank.bestFor}</p>
                <div class="features-box">
                    ${bank.features.map(f => `<span class="feature-chip">${f}</span>`).join('')}
                </div>
                <p><strong>May 2026 Interest:</strong> ${bank.fdr} (FDR)</p>
                <button class="gov-button" style="padding: 5px 15px; font-size:12px; margin-top:10px;">Apply Online</button>
            </div>
        `;
    });
}

// Initial Table Load
const tableBody = document.getElementById('rates-table-body');
banks.forEach(bank => {
    tableBody.innerHTML += `
        <tr>
            <td><strong>${bank.name}</strong></td>
            <td>${bank.savings}</td>
            <td>${bank.fdr}</td>
            <td>${bank.bestFor}</td>
        </tr>
    `;
});

renderStep();
