// Liste des 50 matériaux – noms au pluriel comme demandé
// Liste des 50 matériaux – au pluriel comme demandé
let materials = [];
for (let i = 1; i <= 50; i++) {
    materials.push({ name: `Matériaux ${i}`, quantity: 0 });
}

// Charger les données sauvegardées depuis le navigateur (LocalStorage)
// Charger depuis LocalStorage si déjà sauvegardé
if (localStorage.getItem('materials')) {
    materials = JSON.parse(localStorage.getItem('materials'));
}
@@ -44,7 +44,6 @@ function filterMaterials() {
function exportToCSV() {
    let csv = 'Matériaux,Quantité\n';
    materials.forEach(mat => {
        // Protège les guillemets si un nom en contient
        csv += `"${mat.name.replace(/"/g, '""')}",${mat.quantity}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
@@ -53,7 +52,31 @@ function exportToCSV() {
    a.href = url;
    a.download = 'stock_eel.csv';
    a.click();
    URL.revokeObjectURL(url); // Nettoie
    URL.revokeObjectURL(url);
}

// ────────────────────────────────────────────────
//               DARK MODE TOGGLE
// ────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');

// Charger le thème précédent (ou clair par défaut)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = 'Mode clair ☀️';
}

// Action au clic sur le bouton
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
