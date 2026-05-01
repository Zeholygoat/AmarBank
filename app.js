function renderBanks(data) {
    const grid = document.getElementById('bankGrid');
    const table = document.querySelector('#fullTable tbody');
    
    grid.innerHTML = '';
    table.innerHTML = '';

    data.forEach(bank => {
        // Build Grid Cards
        const card = document.createElement('div');
        card.className = 'bank-card';
        card.innerHTML = `
            <h3>${bank.name}</h3>
            <p><strong>Ideal for:</strong> ${bank.bestFor}</p>
            <p><strong>Card:</strong> ${bank.cardService}</p>
            <div>${bank.features.map(f => `<span class="feature-pill">${f}</span>`).join('')}</div>
        `;
        grid.appendChild(card);

        // Build Table Rows
        const row = table.insertRow();
        row.innerHTML = `
            <td><strong>${bank.name}</strong></td>
            <td>${bank.bestFor}</td>
            <td>${bank.atms}</td>
            <td>${bank.app}</td>
            <td>${bank.cardService}</td>
        `;
    });
}

function filterBanks() {
    const type = document.getElementById('userType').value;
    let filtered = banksData;

    if (type === 'student') {
        filtered = banksData.filter(b => b.features.some(f => f.toLowerCase().includes('student')));
    } else if (type === 'women') {
        filtered = banksData.filter(b => b.features.some(f => f.toLowerCase().includes('women') || f.includes('TARA')));
    }
    // Add more filter logic for NRB and Pro here...

    renderBanks(filtered);
}

// Initial Load
window.onload = () => renderBanks(banksData);
