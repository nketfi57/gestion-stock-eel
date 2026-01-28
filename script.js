let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériaux ${i}`, quantity: 0, image: '' }); // Ajout champ image
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
            <td>
                <span class="name-span">${mat.name}</span>
                <input class="name-input" type="text" value="${mat.name}" style="display:none;">
            </td>
            <td>
                <span class="quantity-span">${mat.quantity}</span>
                <input class="quantity-input" type="number" value="${mat.quantity}" style="display:none;">
            </td>
            <td>
                ${mat.image ? `<img src="${mat.image}" class="material-image" alt="Image de ${mat.name}">` : 'Aucune image'}
            </td>
            <td>
                <button class="add-btn" onclick="updateQuantity(${index}, 1)">+1</button>
                <button class="remove-btn" onclick="updateQuantity(${index}, -1)">-1</button>
                <button class="edit-btn" onclick="editName(${index})">Éditer nom</button>
                <button class="image-btn" onclick="addImage(${index})">Ajouter image</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function updateQuantity(index, change) {
    materials[index].quantity = Math.max(0, materials[index].quantity + change);
    saveToLocalStorage();
    renderTable();
}

function editName(index) {
    const row = document.getElementById('materialsBody').rows[index];
    const nameSpan = row.cells[0].querySelector('.name-span');
    const nameInput = row.cells[0].querySelector('.name-input');
    nameSpan.style.display = 'none';
    nameInput.style.display = 'inline';
    nameInput.focus();

    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            materials[index].name = nameInput.value;
            saveToLocalStorage();
            renderTable();
        }
    });
}

function addImage(index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            materials[index].image = event.target.result;
            saveToLocalStorage();
            renderTable();
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function saveToLocalStorage() {
    localStorage.setItem('materials', JSON.stringify(materials));
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
    let csv = 'Matériaux,Quantité,Image\n';
    materials.forEach(mat => {
        csv += `${mat.name},${mat.quantity},${mat.image ? 'Oui' : 'Non'}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
}

renderTable();
