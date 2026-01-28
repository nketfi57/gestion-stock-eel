// Liste initiale des matériaux
let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: Matériaux ${i}, quantity: 0, image: '' });
}
// Charger depuis LocalStorage si déjà sauvegardé
if (localStorage.getItem('materials')) {
    materials = JSON.parse(localStorage.getItem('materials'));
}
// Horloge Paris (CET/CEST automatique, sans décalage manuel)
function updateClock() {
    const now = new Date();
    const parisTime = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);
   
    document.getElementById('clock').textContent = ${parisTime} (Paris);
}
setInterval(updateClock, 1000);
updateClock();
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
// Affichage du tableau
function renderTable() {
    const tbody = document.getElementById('materialsBody');
    tbody.innerHTML = '';
    materials.forEach((mat, index) => {
        const row = document.createElement('tr');
        row.innerHTML =             <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="name-span">${mat.name}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="name-input" type="text" value="${mat.name}" style="display:none;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="quantity-span">${mat.quantity}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="quantity-input" type="number" min="0" value="${mat.quantity}" style="display:none;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${mat.image ?<img src="${mat.image}" class="material-image" alt="${mat.name}"> : 'Aucune'} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="action-btn add-btn" onclick="updateQuantity(${index}, 1)">+1</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="action-btn remove-btn" onclick="updateQuantity(${index}, -1)">-1</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="action-btn edit-btn" onclick="editName(${index})">Éditer nom</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="action-btn image-btn" onclick="addImage(${index})">Ajouter image</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;
        tbody.appendChild(row);
    });
}
// Modifier la quantité
function updateQuantity(index, change) {
    materials[index].quantity = Math.max(0, materials[index].quantity + change);
    save();
    renderTable();
}
// Éditer le nom
function editName(index) {
    const row = document.getElementById('materialsBody').rows[index];
    const span = row.cells[0].querySelector('.name-span');
    const input = row.cells[0].querySelector('.name-input');
    span.style.display = 'none';
    input.style.display = 'inline-block';
    input.focus();
    input.select();
    const saveName = () => {
        materials[index].name = input.value.trim() || Matériaux ${index+1};
        save();
        renderTable();
    };
    input.onblur = saveName;
    input.onkeydown = e => { if (e.key === 'Enter') saveName(); };
}
// Ajouter une image
function addImage(index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/jpeg,image/png,image/gif';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            alert("Image trop lourde (max 2 Mo conseillé)");
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
// Sauvegarde
function save() {
    localStorage.setItem('materials', JSON.stringify(materials));
}
// Filtre de recherche
function filterMaterials() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#materialsBody tr');
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}
// Export CSV
function exportToCSV() {
    let csv = 'Matériaux,Quantité,Image présente\n';
    materials.forEach(mat => {
        csv += "${mat.name.replace(/"/g,'""')}",${mat.quantity},${mat.image ? 'Oui' : 'Non'}\n;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
    URL.revokeObjectURL(url);
}
// Lancement initial
renderTable();
// CHIE TOI DESSUS
const GITHUB_TOKEN = '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';
//ni
