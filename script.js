// Liste initiale des matériaux
let materials = [];
// Les 50 premiers (comme avant)
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériaux ${i}`, location: '', quantity: 0, image: '' });
}
// Ajout des 70 nouveaux avec tes noms (emplacement vide par défaut, éditable)
const additionalMaterials = [
    { name: "HANGAR P27E X", location: "", quantity: 40, image: "" },
    { name: "HANGAR P46G Simel", location: "", quantity: 6, image: "" },
    { name: "HANGAR P46F Simel", location: "", quantity: 40, image: "" },
    { name: "HANGAR P46 Dervaux", location: "", quantity: 30, image: "" },
    { name: "HANGAR P40 Simel", location: "", quantity: 50, image: "" },
    { name: "HANGAR P40 Dervaux", location: "", quantity: 100, image: "" },
    { name: "HANGAR AP60 Xx2", location: "", quantity: 40, image: "" },
    { name: "HANGAR P1 HT", location: "", quantity: 40, image: "" },
    { name: "HANGAR P2 HT", location: "", quantity: 20, image: "" },
    { name: "HANGAR P2 HTC", location: "", quantity: 60, image: "" },
    { name: "HANGAR P3 HT oui", location: "", quantity: 20, image: "" },
    { name: "HANGAR P4 HT", location: "", quantity: 20, image: "" },
    { name: "HANGAR P5 HT", location: "", quantity: 40, image: "" },
    { name: "HANGAR P6 HTC oui", location: "", quantity: 10, image: "" },
    { name: "HANGAR Entretove Diverre", location: "", quantity: 10, image: "" },
    { name: "HANGAR ENQU4B570", location: "", quantity: 10, image: "" },
    { name: "HANGAR ENT6B570", location: "", quantity: 10, image: "" },
    { name: "HANGAR Pic Anti-nid court", location: "", quantity: 1000, image: "" },
    { name: "HANGAR Pic Anti-nid Long", location: "", quantity: 1000, image: "" },
    { name: "HANGAR SRL 30-6004", location: "", quantity: 40, image: "" },
    { name: "HANGAR TA30B ->", location: "", quantity: 30, image: "" },
    { name: "HANGAR SEF 12-21 oui", location: "", quantity: 60, image: "" },
    { name: "HANGAR P34E", location: "", quantity: 30, image: "" },
    { name: "HANGAR P34D", location: "", quantity: 60, image: "" },
    { name: "HANGAR P27D", location: "", quantity: 10, image: "" },
    { name: "HANGAR P27E", location: "", quantity: 30, image: "" },
    { name: "HANGAR P23D", location: "", quantity: 2, image: "" },
    { name: "HANGAR P23E", location: "", quantity: 30, image: "" },
    { name: "HANGAR JOL B oui", location: "", quantity: 20, image: "" },
    { name: "HANGAR P19-23 oui", location: "", quantity: 20, image: "" },
    { name: "HANGAR Boules STH", location: "", quantity: 40, image: "" },
    { name: "HANGAR Duplex X", location: "", quantity: 0, image: "" }, // X comme inconnu
    { name: "HANGAR C25", location: "", quantity: 60, image: "" },
    { name: "HANGAR AP18C", location: "", quantity: 60, image: "" },
    { name: "HANGAR BBC-570 oui", location: "", quantity: 100, image: "" },
    { name: "HANGAR BBC-412 oui", location: "", quantity: 50, image: "" },
    { name: "HANGAR BBC-228 oui", location: "", quantity: 50, image: "" },
    { name: "HANGAR CU-570 oui", location: "", quantity: 40, image: "" },
    { name: "HANGAR PT 15/600 <-", location: "", quantity: 20, image: "" },
    { name: "HANGAR PT30/400 ->", location: "", quantity: 20, image: "" },
    { name: "HANGAR PR15/400 oui", location: "", quantity: 3, image: "" },
    { name: "HANGAR PR15/600 oui", location: "", quantity: 3, image: "" },
    { name: "HANGAR PT 15/400 oui", location: "", quantity: 50, image: "" },
    { name: "HANGAR JUP 15", location: "", quantity: 30, image: "" },
    { name: "HANGAR RL15-300", location: "", quantity: 50, image: "" },
    { name: "HANGAR RL15-900", location: "", quantity: 39, image: "" },
    { name: "HANGAR TA 15B oui", location: "", quantity: 40, image: "" },
    { name: "HANGAR CT30-160", location: "", quantity: 9, image: "" },
    { name: "HANGAR Etoux", location: "", quantity: 500, image: "" },
    { name: "HANGAR RL15-600", location: "", quantity: 500, image: "" },
    { name: "HANGAR Patourette", location: "", quantity: 500, image: "" },
    { name: "HANGAR END6B 1144 Xx2", location: "", quantity: 100, image: "" },
    { name: "HANGAR CM 30/60A", location: "", quantity: 4, image: "" },
    { name: "HANGAR RL 30/300", location: "", quantity: 9, image: "" },
    { name: "HANGAR RL 60/900", location: "", quantity: 2, image: "" },
    { name: "HANGAR MCE 268 Xx2", location: "", quantity: 200, image: "" },
    { name: "HANGAR QDC + echellon", location: "", quantity: 100, image: "" },
    { name: "HANGAR BBC 1144", location: "", quantity: 50, image: "" },
    { name: "HANGAR OE+BS300 oui", location: "", quantity: 20, image: "" },
    { name: "HANGAR S15 N47", location: "", quantity: 20, image: "" },
    { name: "HANGAR BG 100", location: "", quantity: 60, image: "" },
    { name: "HANGAR BG 400", location: "", quantity: 20, image: "" },
    { name: "HANGAR RL Reglo oui", location: "", quantity: 10, image: "" },
    { name: "HANGAR CT 30-120", location: "", quantity: 40, image: "" },
    { name: "HANGAR OE+ B5 150 oui", location: "", quantity: 60, image: "" },
    { name: "HANGAR CT 15-120 oui", location: "", quantity: 100, image: "" },
    { name: "HANGAR PF 30 C", location: "", quantity: 40, image: "" },
    { name: "HANGAR PFD 30 oui", location: "", quantity: 11, image: "" },
    { name: "HANGAR PFD 15 oui", location: "", quantity: 25, image: "" },
    { name: "HANGAR PFD 15 CA oui", location: "", quantity: 50, image: "" },
    { name: "HANGAR OE+B5 100 oui", location: "", quantity: 200, image: "" }
];
materials = materials.concat(additionalMaterials); // Ajoute les 70 à la fin

// Charger depuis LocalStorage si déjà sauvegardé (priorité sur les données locales)
if (localStorage.getItem('materials')) {
    materials = JSON.parse(localStorage.getItem('materials'));
}

// Horloge Paris (inchangé)
function updateClock() {
    const now = new Date();
    const parisTime = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);
    document.getElementById('clock').textContent = `${parisTime} (Paris)`;
}
setInterval(updateClock, 1000);
updateClock();

// Dark mode toggle (inchangé)
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

// Affichage du tableau (ajout colonne Emplacement)
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
                <span class="location-span">${mat.location || 'Aucun emplacement'}</span>
                <input class="location-input" type="text" value="${mat.location}" style="display:none;">
            </td>
            <td>
                <span class="quantity-span">${mat.quantity}</span>
                <input class="quantity-input" type="number" min="0" value="${mat.quantity}" style="display:none;">
            </td>
            <td>
                ${mat.image ? `<img src="${mat.image}" class="material-image" alt="${mat.name}">` : 'Aucune'}
            </td>
            <td>
                <button class="action-btn add-btn" onclick="updateQuantity(${index}, 1)">+1</button>
                <button class="action-btn remove-btn" onclick="updateQuantity(${index}, -1)">-1</button>
                <button class="action-btn edit-btn" onclick="editName(${index})">Éditer nom</button>
                <button class="action-btn edit-btn" onclick="editLocation(${index})">Éditer emplacement</button>
                <button class="action-btn image-btn" onclick="addImage(${index})">Ajouter image</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Modifier la quantité (inchangé)
function updateQuantity(index, change) {
    materials[index].quantity = Math.max(0, materials[index].quantity + change);
    save();
    renderTable();
}

// Éditer le nom (inchangé)
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

// NOUVEAU : Éditer l'emplacement
function editLocation(index) {
    const row = document.getElementById('materialsBody').rows[index];
    const span = row.cells[1].querySelector('.location-span');
    const input = row.cells[1].querySelector('.location-input');
    span.style.display = 'none';
    input.style.display = 'inline-block';
    input.focus();
    input.select();
    const saveLocation = () => {
        materials[index].location = input.value.trim();
        save();
        renderTable();
    };
    input.onblur = saveLocation;
    input.onkeydown = e => { if (e.key === 'Enter') saveLocation(); };
}

// Ajouter une image (inchangé)
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

// Sauvegarde (inchangé)
function save() {
    localStorage.setItem('materials', JSON.stringify(materials));
}

// Filtre de recherche (inchangé)
function filterMaterials() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#materialsBody tr');
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? '' : 'none';
    });
}

// Export CSV (ajout colonne Emplacement)
function exportToCSV() {
    let csv = 'Matériaux,Emplacement,Quantité,Image présente\n';
    materials.forEach(mat => {
        csv += `"${mat.name.replace(/"/g,'""')}","${mat.location.replace(/"/g,'""')}",${mat.quantity},${mat.image ? 'Oui' : 'Non'}\n`;
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
