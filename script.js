
// Weapon data - add your weapons here
const weaponData = {
  'sword': { cost: 100, dmg: '1d8', armorEffect: '+1', usersCS: 5, throwRange: 10, breakOn: 1, twoHanded: 'No', notes: 'Basic sword', wt: 3 },
  'axe': { cost: 150, dmg: '1d10', armorEffect: '+2', usersCS: 6, throwRange: 8, breakOn: 2, twoHanded: 'Yes', notes: 'Heavy weapon', wt: 5 },
  // Add more weapons as needed
};

// Ranged weapon data - add your ranged weapons here
const rangedData = {
  'bow': { cost: 80, damage: '1d6', agil: 3, shoot: 5, reload: 1, range: 100, breakOn: 1, notes: 'Standard bow', wt: 2 },
  'crossbow': { cost: 120, damage: '1d8', agil: 2, shoot: 4, reload: 2, range: 120, breakOn: 1, notes: 'Heavy crossbow', wt: 4 },
  // Add more ranged weapons as needed
};

// Armor data - add your armor here
const armorData = {
  'leather': { cost: 50, armor: 2, move: 0, agil: 0, shoot: 0, percMod: 0, dex: 0, notes: 'Light armor', wt: 5 },
  'chainmail': { cost: 200, armor: 5, move: -1, agil: -1, shoot: 0, percMod: 0, dex: -1, notes: 'Medium armor', wt: 20 },
  'plate': { cost: 500, armor: 8, move: -2, agil: -2, shoot: -1, percMod: -1, dex: -2, notes: 'Heavy armor', wt: 40 },
  // Add more armor as needed
};

// Populate dropdown options on page load
window.addEventListener('DOMContentLoaded', function() {
  // Populate weapon dropdowns
  const weaponSelects = document.querySelectorAll('.weapon-select');
  weaponSelects.forEach(select => {
    for (let weapon in weaponData) {
      const option = document.createElement('option');
      option.value = weapon;
      option.textContent = weapon.charAt(0).toUpperCase() + weapon.slice(1);
      select.appendChild(option);
    }
  });
  
  // Populate ranged weapon dropdowns
  const rangedSelects = document.querySelectorAll('.ranged-select');
  rangedSelects.forEach(select => {
    for (let weapon in rangedData) {
      const option = document.createElement('option');
      option.value = weapon;
      option.textContent = weapon.charAt(0).toUpperCase() + weapon.slice(1);
      select.appendChild(option);
    }
  });
  
  // Populate armor dropdowns
  const armorSelects = document.querySelectorAll('.armor-select');
  armorSelects.forEach(select => {
    for (let armor in armorData) {
      const option = document.createElement('option');
      option.value = armor;
      option.textContent = armor.charAt(0).toUpperCase() + armor.slice(1);
      select.appendChild(option);
    }
  });
});

// Fill weapon data when selected
function fillWeaponData(selectElement, rowIndex) {
  const weaponName = selectElement.value;
  if (!weaponName) return;
  
  const weapon = weaponData[weaponName];
  const row = selectElement.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  inputs[0].value = weapon.cost;
  inputs[1].value = weapon.dmg;
  inputs[2].value = weapon.armorEffect;
  inputs[3].value = weapon.usersCS;
  inputs[4].value = weapon.throwRange;
  inputs[5].value = weapon.breakOn;
  inputs[6].value = weapon.twoHanded;
  inputs[7].value = weapon.notes;
  inputs[8].value = weapon.wt;
}

// Fill ranged weapon data when selected
function fillRangedData(selectElement, rowIndex) {
  const weaponName = selectElement.value;
  if (!weaponName) return;
  
  const weapon = rangedData[weaponName];
  const row = selectElement.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  inputs[0].value = weapon.cost;
  inputs[1].value = weapon.damage;
  inputs[2].value = weapon.agil;
  inputs[3].value = weapon.shoot;
  inputs[4].value = weapon.reload;
  inputs[5].value = weapon.range;
  inputs[6].value = weapon.breakOn;
  inputs[7].value = weapon.notes;
  inputs[8].value = weapon.wt;
}

// Fill armor data when selected
function fillArmorData(selectElement, rowIndex) {
  const armorName = selectElement.value;
  if (!armorName) return;
  
  const armor = armorData[armorName];
  const row = selectElement.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  inputs[0].value = armor.cost;
  inputs[1].value = armor.armor;
  inputs[2].value = armor.move;
  inputs[3].value = armor.agil;
  inputs[4].value = armor.shoot;
  inputs[5].value = armor.percMod;
  inputs[6].value = armor.dex;
  inputs[7].value = armor.notes;
  inputs[8].value = armor.wt;
}
