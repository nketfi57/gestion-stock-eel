// Liste des 50 matériaux – noms au pluriel comme demandé
let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériaux ${i}`, quantity: 0 });
}

// Charger les données sauvegardées depuis le navigateur (LocalStorage)
if (localStorage.getItem('materials')) {
    materials = JSON.parse(localStorage.getItem('materials'));
}

function renderTable() {
    const tbody = document.getElementById('materialsBody');
    tbody.innerHTML = '';
    materials.forEach((mat, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mat.name}</td>
            <td>${mat.quantity}</td>
            <td>
                <button class="add-btn" onclick="updateQuantity(${index}, 1)">+1</button>
                <button class="remove-btn" onclick="updateQuantity(${index}, -1)">-1</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateQuantity(index, change) {
    materials[index].quantity = Math.max(0, materials[index].quantity + change);
    localStorage.setItem('materials', JSON.stringify(materials));
    renderTable();
}

function filterMaterials() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#materialsBody tr');
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}

function exportToCSV() {
    let csv = 'Matériaux,Quantité\n';
    materials.forEach(mat => {
        // Protège les guillemets si un nom en contient
        csv += `"${mat.name.replace(/"/g, '""')}",${mat.quantity}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
    URL.revokeObjectURL(url); // Nettoie
}

renderTable();
