// Liste des 50 matériaux avec image (base64)
let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériaux ${i}`, quantity: 0, image: '' });
}

// Charger depuis LocalStorage
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
                <input class="quantity-input" type="number" min="0" value="${mat.quantity}" style="display:none;">
            </td>
            <td>
                ${mat.image ? `<img src="${mat.image}" class="material-image" alt="${mat.name}">` : 'Aucune image'}
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
    save();
    renderTable();
}

function editName(index) {
    const row = document.getElementById('materialsBody').rows[index];
    const span = row.cells[0].querySelector('.name-span');
    const input = row.cells[0].querySelector('.name-input');
    span.style.display = 'none';
    input.style.display = 'inline-block';
    input.focus();
    input.select();

    const saveName = () => {
        materials[index].name = input.value.trim() || `Matériaux ${index+1}`;
        save();
        renderTable();
    };

    input.onblur = saveName;
    input.onkeydown = e => { if (e.key === 'Enter') saveName(); };
}

function addImage(index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/png,image/gif';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            alert("Image trop lourde (max 2 Mo)");
            return;
        }
        const reader = new FileReader();
        reader.onload = event => {
            materials[index].image = event.target.result;
            save();
            renderTable();
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function save() {
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
    let csv = 'Matériaux,Quantité,Image présente\n';
    materials.forEach(mat => {
        csv += `"${mat.name.replace(/"/g,'""')}",${mat.quantity},${mat.image ? 'Oui' : 'Non'}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = 'Mode clair ☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = 'Mode clair ☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Mode sombre 🌙';
        localStorage.setItem('theme', 'light');
    }
});

renderTable();
