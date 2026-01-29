// Référence Firebase
const materialsRef = ref(db, 'materials');

// Variable globale
let materials = [];

// Charger en temps réel depuis Firebase
onValue(materialsRef, (snapshot) => {
  materials = snapshot.val() || [];

  // Si la base est vide → initialise avec TES matériaux
  if (materials.length === 0) {
    console.log("Base Firebase vide → initialisation des matériaux");
    materials = [
      { name: "P27E X", location: "HANGAR", quantity: 40, image: '' },
      { name: "P46G Simel", location: "HANGAR", quantity: 6, image: '' },
      { name: "P46F Simel", location: "HANGAR", quantity: 40, image: '' },
      { name: "P46 Dervaux", location: "HANGAR", quantity: 30, image: '' },
      { name: "P40 Simel", location: "HANGAR", quantity: 50, image: '' },
      { name: "P40 Dervaux", location: "HANGAR", quantity: 100, image: '' },
      { name: "AP60 Xx2", location: "HANGAR", quantity: 40, image: '' },
      { name: "P1 HT", location: "HANGAR", quantity: 40, image: '' },
      { name: "P2 HT", location: "HANGAR", quantity: 20, image: '' },
      { name: "P2 HTC", location: "HANGAR", quantity: 60, image: '' },
      { name: "P3 HT", location: "HANGAR", quantity: 20, image: '' },
      { name: "P4 HT", location: "HANGAR", quantity: 20, image: '' },
      { name: "P5 HT", location: "HANGAR", quantity: 40, image: '' },
      { name: "P6 HTC", location: "HANGAR", quantity: 10, image: '' },
      { name: "Entretove Diverre", location: "HANGAR", quantity: 10, image: '' },
      { name: "ENQU4B570", location: "HANGAR", quantity: 10, image: '' },
      { name: "ENT6B570", location: "HANGAR", quantity: 10, image: '' },
      { name: "Pic Anti-nid court", location: "HANGAR", quantity: 1000, image: '' },
      { name: "Pic Anti-nid Long", location: "HANGAR", quantity: 1000, image: '' },
      { name: "SRL 30-6004", location: "HANGAR", quantity: 40, image: '' },
      { name: "TA30B ->", location: "HANGAR", quantity: 30, image: '' },
      { name: "SEF 12-21", location: "HANGAR", quantity: 60, image: '' },
      { name: "P34E", location: "HANGAR", quantity: 30, image: '' },
      { name: "P34D", location: "HANGAR", quantity: 60, image: '' },
      { name: "P27D", location: "HANGAR", quantity: 10, image: '' },
      { name: "P27E", location: "HANGAR", quantity: 30, image: '' },
      { name: "P23D", location: "HANGAR", quantity: 2, image: '' },
      { name: "P23E", location: "HANGAR", quantity: 30, image: '' },
      { name: "JOL B", location: "HANGAR", quantity: 20, image: '' },
      { name: "P19-23", location: "HANGAR", quantity: 20, image: '' },
      { name: "Boules STH", location: "HANGAR", quantity: 40, image: '' },
      { name: "Duplex X", location: "HANGAR", quantity: 0, image: '' },
      { name: "C25", location: "HANGAR", quantity: 60, image: '' },
      { name: "AP18C", location: "HANGAR", quantity: 60, image: '' },
      { name: "BBC-570", location: "HANGAR", quantity: 100, image: '' },
      { name: "BBC-412", location: "HANGAR", quantity: 50, image: '' },
      { name: "BBC-228", location: "HANGAR", quantity: 50, image: '' },
      { name: "CU-570", location: "HANGAR", quantity: 40, image: '' },
      { name: "PT 15/600 <-", location: "HANGAR", quantity: 20, image: '' },
      { name: "PT30/400 ->", location: "HANGAR", quantity: 20, image: '' },
      { name: "PR15/400", location: "HANGAR", quantity: 3, image: '' },
      { name: "PR15/600", location: "HANGAR", quantity: 3, image: '' },
      { name: "PT 15/400", location: "HANGAR", quantity: 50, image: '' },
      { name: "JUP 15", location: "HANGAR", quantity: 30, image: '' },
      { name: "RL15-300", location: "HANGAR", quantity: 50, image: '' },
      { name: "RL15-900", location: "HANGAR", quantity: 39, image: '' },
      { name: "TA 15B", location: "HANGAR", quantity: 40, image: '' },
      { name: "CT30-160", location: "HANGAR", quantity: 9, image: '' },
      { name: "Etoux", location: "HANGAR", quantity: 500, image: '' },
      { name: "RL15-600", location: "HANGAR", quantity: 500, image: '' },
      { name: "Patourette", location: "HANGAR", quantity: 500, image: '' },
      { name: "END6B 1144 Xx2", location: "HANGAR", quantity: 100, image: '' },
      { name: "CM 30/60A", location: "HANGAR", quantity: 4, image: '' },
      { name: "RL 30/300", location: "HANGAR", quantity: 9, image: '' },
      { name: "RL 60/900", location: "HANGAR", quantity: 2, image: '' },
      { name: "MCE 268 Xx2", location: "HANGAR", quantity: 200, image: '' },
      { name: "QDC + echellon", location: "HANGAR", quantity: 100, image: '' },
      { name: "BBC 1144", location: "HANGAR", quantity: 50, image: '' },
      { name: "OE+BS300", location: "HANGAR", quantity: 20, image: '' },
      { name: "S15 N47", location: "HANGAR", quantity: 20, image: '' },
      { name: "BG 100", location: "HANGAR", quantity: 60, image: '' },
      { name: "BG 400", location: "HANGAR", quantity: 20, image: '' },
      { name: "RL Reglo", location: "HANGAR", quantity: 10, image: '' },
      { name: "CT 30-120", location: "HANGAR", quantity: 40, image: '' },
      { name: "OE+ B5 150", location: "HANGAR", quantity: 60, image: '' },
      { name: "CT 15-120", location: "HANGAR", quantity: 100, image: '' },
      { name: "PF 30 C", location: "HANGAR", quantity: 40, image: '' },
      { name: "PFD 30", location: "HANGAR", quantity: 11, image: '' },
      { name: "PFD 15", location: "HANGAR", quantity: 25, image: '' },
      { name: "PFD 15 CA", location: "HANGAR", quantity: 50, image: '' },
      { name: "OE+B5 100", location: "HANGAR", quantity: 200, image: '' },
      { name: "TT 15-80", location: "HANGAR", quantity: 60, image: '' },
      { name: "CT 15/80", location: "HANGAR", quantity: 20, image: '' },
      { name: "PF 15 C", location: "HANGAR", quantity: 30, image: '' },
      { name: "PFS 15", location: "HANGAR", quantity: 7, image: '' },
      { name: "C18 A1", location: "HANGAR", quantity: 50, image: '' },
      { name: "C18 A2", location: "HANGAR", quantity: 2, image: '' },
      { name: "C18 FE", location: "HANGAR", quantity: 40, image: '' },
      { name: "M5 MA 1144", location: "HANGAR", quantity: 15, image: '' },
      { name: "GB 20B", location: "HANGAR", quantity: 25, image: '' },
      { name: "CD 15 A", location: "HANGAR", quantity: 30, image: '' },
      { name: "CD 30 A", location: "HANGAR", quantity: 15, image: '' },
      { name: "CM 30/15A", location: "HANGAR", quantity: 15, image: '' },
      { name: "B15 M", location: "HANGAR", quantity: 10, image: '' },
      { name: "TD 15 X 30 X", location: "HANGAR", quantity: 8, image: '' },
      { name: "CM 15/30A", location: "HANGAR", quantity: 40, image: '' },
      { name: "A15 F.U", location: "HANGAR", quantity: 20, image: '' },
      { name: "CC 15A", location: "HANGAR", quantity: 30, image: '' },
      { name: "CC 30 A", location: "HANGAR", quantity: 15, image: '' },
      { name: "16X70", location: "HANGAR", quantity: 10, image: '' },
      { name: "18X70", location: "HANGAR", quantity: 40, image: '' },
      { name: "24X90", location: "HANGAR", quantity: 4, image: '' },
      { name: "20X90", location: "HANGAR", quantity: 4, image: '' },
      { name: "16X100", location: "HANGAR", quantity: 20, image: '' },
      { name: "RL15-150", location: "HANGAR", quantity: 40, image: '' },
      { name: "MN 15", location: "HANGAR", quantity: 40, image: '' }
    ];
    set(materialsRef, materials);
  }

  renderTable();
});

// Le reste de ton code (horloge, dark mode, renderTable, updateQuantity, editName, editLocation, addImage, filterMaterials, exportToCSV)
// Colle ici le reste de ton script.js actuel
// Exemple minimal pour tester :
function renderTable() {
  const tbody = document.getElementById('materialsBody');
  tbody.innerHTML = '';
  materials.forEach((mat, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mat.name}</td>
      <td>${mat.location}</td>
      <td>${mat.quantity}</td>
      <td>${mat.image ? '<img src="' + mat.image + '" style="max-width:80px;">' : 'Aucune'}</td>
      <td>
        <button onclick="updateQuantity(${index}, 1)">+1</button>
        <button onclick="updateQuantity(${index}, -1)">-1</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Fonctions d'édition
function updateQuantity(index, change) {
  materials[index].quantity = Math.max(0, materials[index].quantity + change);
  set(materialsRef, materials);
}

// ... tes autres fonctions (editName, editLocation, addImage, filterMaterials, exportToCSV) ...

// Lancement (onValue le fait automatiquement)
