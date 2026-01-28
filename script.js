let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériau ${i}`, quantity: 0 });
}

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
    let csv = 'Matériau,Quantité\n';
    materials.forEach(mat => {
        csv += `"${mat.name}",${mat.quantity}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
}

renderTable();
