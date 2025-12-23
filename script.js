
// Melee Weapon data
const meleeWeapons = [
  { name: "Axe", cost: 3, damage: "+1", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "-", wt: 2 },
  { name: "Bastard sword", cost: 7, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "2h", notes: "Before rolling, choose to reduce target's armor by 1. In that case user's fight and strenght will be reduced by 1.", wt: 3 },
  { name: "Battleaxe", cost: 5, damage: "+2", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-2", twoHanded: "2h", notes: "shield breaker", wt: 4 },
  { name: "Broadsword", cost: 5, damage: "+1", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-", wt: 2 },
  { name: "Claws", cost: "-", damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "natural weapon in case of critical failure if the breakage is rolled failed users unarmed until the end of the quest then the weapon will be replenished", wt: "?" },
  { name: "Club", cost: "-", damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "", twoHanded: "", notes: "", wt: 2 },
  { name: "Dagger", cost: 1, damage: "", armorEffect: "", fightEffect: "-1", throwRange: "+4", breakOn: "1", twoHanded: "", notes: "reduces the target's armor by 1 if he is attacked from behind or knocked down no penalty for drawing can be used as a drawing weapon throwing range 4", wt: 1 },
  { name: "Double headed ax", cost: 6, damage: "+2", armorEffect: "-1", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "critical failure on result of double 1 or 2 if the user manages to hit with a critical hit or non-magic Shields blocking the attack will, 2 handed", wt: 5 },
  { name: "Elven sword", cost: 12, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-1 damage against targets using heavy armor Shield can be 2-handed in that case it's deals 1 more damage dice no penalty for drawing", wt: 2 },
  { name: "Falcon sword", cost: 3, damage: "+1", armorEffect: "", fightEffect: "-1**", throwRange: "", breakOn: "1", twoHanded: "", notes: "-1 to users attack while defending -1 to targets armor in case of critical hit", wt: 1 },
  { name: "Falx", cost: 3, damage: "+2", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "-", wt: 2 },
  { name: "Fangs", cost: "", damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-", wt: "" },
  { name: "Falcata", cost: 3, damage: "+1", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "", twoHanded: "", notes: "-1 to users attack while defending. -1 to targets armor incase of critical hit", wt: 1 },
  { name: "Fausal Sword", cost: 5, damage: "+3", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "2h", notes: "-2 damage against targets using heavy armor or Shield, 2handed", wt: 3 },
  { name: "Flail", cost: 3, damage: "+1", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "critical failure on a result of double 1 or 2 ignore Shield blocking in case of critical hit", wt: 3 },
  { name: "Gladiator scissor", cost: 3, damage: "-1", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-4", twoHanded: "", notes: "can block attacks on a result of 6 as if it were a buckler. in case of critical hit, equal or smaller size targets drop their weapons, except leaders, just as it happens with a critical failure", wt: 1 },
  { name: "Great Axe", cost: 5, damage: "+3", armorEffect: "-1", fightEffect: "-2", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "-2 damage dice against targets using heavy armor", wt: 4 },
  { name: "Great Falx", cost: 5, damage: "+3", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "", twoHanded: "2h", notes: "-2 damage dice against critical armor", wt: 4 },
  { name: "Great flail", cost: 5, damage: "+2", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "2h", notes: "-1 to his attack critical failing result of double 1 and 2 blocking with Shield is ignored in the case of critical hit", wt: 5 },
  { name: "Greatsword", cost: 7, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "2h", notes: "long range. user must have a strength of four better", wt: 4 },
  { name: "Halberd", cost: 5, damage: "", armorEffect: "-1", fightEffect: "", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "-", wt: 3 },
  { name: "Hammer", cost: 3, damage: "-1", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "An extra -1 to targets armor incase of critical hit. Critical failure result on double 1,2,3", wt: 2 },
  { name: "Horns", cost: 6, damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "natural weapon. they do not increastthe enemies armor whne performaing an onslaught. if weapon is broken after critical failure, user is unarmed untill the end of the quest. The weapon will be replenished.", wt: "" },
  { name: "Improvised weapon", cost: 3, damage: "", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-6", twoHanded: "", notes: "", wt: 1 },
  { name: "Iron fist", cost: 3, damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "can block attacks on a result of 6 as if it were a buckler", wt: 1 },
  { name: "Katana", cost: 7, damage: "+3", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "2h", notes: "2 damage dice against targets using heavy armor or Shield no penalty for drawing,", wt: 4 },
  { name: "Katar", cost: 3, damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "if the skill-fighting weapon is used with the same weapons user won't get any penalty to his attack", wt: 1 },
  { name: "Khopesh sword", cost: 3, damage: "+2", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1", twoHanded: "", notes: "-", wt: 2 },
  { name: "Kusarigama", cost: 3, damage: "", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "2h", notes: "equal or smallser size targets are stunned in case of critical hit. targets who are not leaders also drop their weapons incase of critical hit", wt: 2 },
  { name: "Lance", cost: 3, damage: "+2", armorEffect: "-1", fightEffect: "", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "long ranged. Can only be used-attack by riders who have advanced at least 3 spaces in a straight line in case of a critical or equal smaller size targets including the writers are knocked down", wt: 3 },
  { name: "Mace", cost: 3, damage: "", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "Equal or smaller size targets are stunned in thecase of a critical", wt: 2 },
  { name: "Macuahuitl", cost: 1, damage: "", armorEffect: "-1", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "Equal or smaller size targets are stunned in thecase of a critical", wt: 2 },
  { name: "Morningstar", cost: 4, damage: "+1", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "critical failure result of double 1 2 or 3 equal or smaller size targets are stunned in case of critical hit", wt: 3 },
  { name: "Rapier", cost: 4, damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "if user has a fight and a strength of greater than four of the targets armor is reduced by 1 in case of critical hit", wt: 2 },
  { name: "Saber", cost: 4, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-3 damage against targets using heavy armor or shield. +1 damage die if used while riding", wt: 2 },
  { name: "Scimitar", cost: 4, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-2 damage against targets using heavy armor or shield.", wt: 2 },
  { name: "Scythe", cost: 2, damage: "+2", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "2h", notes: "critical fail on a double 1 or 2", wt: 3 },
  { name: "Serrated sword", cost: 5, damage: "+2", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1", twoHanded: "", notes: "-1 damage against targets using heavy armor Shield critical failure on result of double 1 2 or 3", wt: 2 },
  { name: "Short sword", cost: 3, damage: "", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1", twoHanded: "", notes: "*-1 to users attack (skill) while defending (against enemy attack)", wt: 1 },
  { name: "Spear", cost: 2, damage: "", armorEffect: "", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "", notes: "long ranged. can be used in 2 hand stealing when we're damaged ice", wt: 2 },
  { name: "Staff", cost: 1, damage: "", armorEffect: "+1", fightEffect: "", throwRange: "", breakOn: "1-2", twoHanded: "1h/2h", notes: "When used 2h +1 Dam", wt: 2 },
  { name: "Throwing Ax", cost: 2, damage: "", armorEffect: "-1", fightEffect: "-1", throwRange: "+4", breakOn: "1-2", twoHanded: "", notes: "can be used as a throwing weapon range 4", wt: 1 },
  { name: "Tool", cost: 1, damage: "", armorEffect: "", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "maybe used even by characters for whom weapons are restricted", wt: 1 },
  { name: "Trident", cost: 3, damage: "", armorEffect: "", fightEffect: "", throwRange: "+4", breakOn: "1-3", twoHanded: "1h/2h", notes: "long ranged. -2 to users shoot. can be used as a throwing weapon can be used 2handed dealing 2 more damage days critical failure on double 1 2 or 3", wt: 2 },
  { name: "Unarmed", cost: "-", damage: "", armorEffect: "+1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "", notes: "in the case of critical failure if the break is roll is failed use your stunned until the Quest", wt: "-" },
  { name: "Warhammer", cost: 5, damage: "+1", armorEffect: "-1", fightEffect: "-1", throwRange: "", breakOn: "1-3", twoHanded: "2h", notes: "equal or smaller size targets are stunned in the case of critical", wt: 4 },
  { name: "Whip", cost: 2, damage: "", armorEffect: "+1", fightEffect: "-1", throwRange: "", breakOn: "", twoHanded: "", notes: "in case of critical hit, equal or smaller size targets drop their weapons, except leaders, just as it happens with a critical failure", wt: 1 }
];

// Convert to object format for lookup
const weaponData = {};
meleeWeapons.forEach(weapon => {
  const key = weapon.name.toLowerCase().replace(/\s+/g, '-');
  weaponData[key] = {
    cost: weapon.cost,
    dmg: weapon.damage,
    armorEffect: weapon.armorEffect,
    usersCS: weapon.fightEffect,
    throwRange: weapon.throwRange,
    breakOn: weapon.breakOn,
    twoHanded: weapon.twoHanded,
    notes: weapon.notes,
    wt: weapon.wt
  };
});

// Convert ranged weapons to object format for lookup
const rangedData = {};
if (typeof rangedWeapons !== 'undefined') {
  rangedWeapons.forEach(weapon => {
    const key = weapon.name.toLowerCase().replace(/\s+/g, '-');
    rangedData[key] = {
      cost: weapon.cost,
      damage: weapon.damage,
      agil: weapon.agilEffect,
      shoot: weapon.shootEffect,
      reload: weapon.reload,
      range: weapon.range,
      breakOn: weapon.breakOn,
      notes: weapon.notes,
      wt: weapon.wt
    };
  });
}

// Convert shields to object format for lookup
const shieldsData = {};
if (typeof shields !== 'undefined') {
  shields.forEach(shield => {
    const key = shield.name.toLowerCase().replace(/\s+/g, '-');
    shieldsData[key] = {
      cost: shield.cost,
      defendOn: shield.defendOn,
      agil: shield.agil,
      shoot: shield.shoot,
      perc: shield.perc,
      breakOn: shield.breakOn,
      runningFig: shield.runningFig,
      notes: shield.notes,
      wt: shield.wt
    };
  });
}

// Convert armor to object format for lookup
const armorData = {};
if (typeof armor !== 'undefined') {
  armor.forEach(armorItem => {
    const key = armorItem.name.toLowerCase().replace(/\s+/g, '-');
    armorData[key] = {
      cost: armorItem.cost,
      armor: armorItem.armor,
      move: armorItem.move,
      agil: armorItem.agil,
      shoot: armorItem.shoot,
      percMod: armorItem.percMod,
      dex: armorItem.dex,
      notes: armorItem.notes,
      wt: armorItem.wt
    };
  });
}

// Populate dropdown options on page load
window.addEventListener('DOMContentLoaded', function() {
  // Populate class dropdown
  const classDropdown = document.querySelector('.dropdown-1');
  if (classDropdown && typeof classes !== 'undefined') {
    classDropdown.innerHTML = '<option value="">Select class</option>';
    classes.forEach(classItem => {
      const option = document.createElement('option');
      option.value = classItem.name.toLowerCase().replace(/\s+/g, '-');
      option.textContent = classItem.name;
      classDropdown.appendChild(option);
    });
    
    // Add event listener for class selection
    classDropdown.addEventListener('change', updateRaceAllowed);
  }
  
  // Populate race dropdown
  const raceDropdown = document.querySelector('.dropdown-2');
  if (raceDropdown && typeof races !== 'undefined') {
    raceDropdown.innerHTML = '<option value="">Select race</option>';
    races.forEach(race => {
      const option = document.createElement('option');
      option.value = race.name.toLowerCase().replace(/\s+/g, '-');
      option.textContent = race.name;
      raceDropdown.appendChild(option);
    });
    
    // Add event listener for race selection
    raceDropdown.addEventListener('change', function() {
      fillRaceStats();
      updateRaceAllowed();
    });
  }
  
  // Populate weapon dropdowns
  const weaponSelects = document.querySelectorAll('.weapon-select');
  weaponSelects.forEach(select => {
    meleeWeapons.forEach(weapon => {
      const option = document.createElement('option');
      option.value = weapon.name.toLowerCase().replace(/\s+/g, '-');
      option.textContent = weapon.name;
      select.appendChild(option);
    });
  });
  
  // Populate ranged weapon dropdowns
  const rangedSelects = document.querySelectorAll('.ranged-select');
  if (rangedSelects.length > 0 && typeof rangedWeapons !== 'undefined') {
    rangedSelects.forEach(select => {
      rangedWeapons.forEach(weapon => {
        const option = document.createElement('option');
        option.value = weapon.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = weapon.name;
        select.appendChild(option);
      });
    });
  }
  
  // Populate shields dropdowns
  const shieldsSelects = document.querySelectorAll('.shield-select');
  if (shieldsSelects.length > 0 && typeof shields !== 'undefined') {
    shieldsSelects.forEach(select => {
      shields.forEach(shield => {
        const option = document.createElement('option');
        option.value = shield.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = shield.name;
        select.appendChild(option);
      });
    });
  }
  
  // Populate armor dropdowns
  const armorSelects = document.querySelectorAll('.armor-select');
  if (armorSelects.length > 0 && typeof armor !== 'undefined') {
    armorSelects.forEach(select => {
      armor.forEach(armorItem => {
        const option = document.createElement('option');
        option.value = armorItem.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = armorItem.name;
        select.appendChild(option);
      });
    });
  }
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

// Fill shield data when selected
function fillShieldData(selectElement, rowIndex) {
  const shieldName = selectElement.value;
  if (!shieldName) return;
  
  const shield = shieldsData[shieldName];
  const row = selectElement.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  inputs[0].value = shield.cost;
  inputs[1].value = shield.defendOn;
  inputs[2].value = shield.agil;
  inputs[3].value = shield.shoot;
  inputs[4].value = shield.perc;
  inputs[5].value = shield.breakOn;
  inputs[6].value = shield.runningFig;
  inputs[7].value = shield.notes;
  inputs[8].value = shield.wt;
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

// Fill race stats when race is selected
function fillRaceStats() {
  const raceDropdown = document.querySelector('.dropdown-2');
  const raceName = raceDropdown.value;
  if (!raceName) return;
  
  // Find the selected race
  const selectedRace = races.find(race => 
    race.name.toLowerCase().replace(/\s+/g, '-') === raceName
  );
  
  if (!selectedRace) return;
  
  // Get all stat table rows
  const statsTables = document.querySelectorAll('.stats-table tbody');
  
  // Map stats to their corresponding rows
  const statsMap = [
    { name: 'Movement', data: selectedRace.mov },
    { name: 'Combat Skill', data: selectedRace.combat },
    { name: 'Strength', data: selectedRace.strength },
    { name: 'Shooting', data: selectedRace.shooting },
    { name: 'Armor', data: selectedRace.armor },
    { name: 'Fortune', data: selectedRace.fortune },
    { name: 'Agility', data: selectedRace.agility },
    { name: 'Int', data: selectedRace.intelligence },
    { name: 'Mana', data: selectedRace.mana },
    { name: 'Courage', data: selectedRace.courage },
    { name: 'Vitality', data: selectedRace.vitality }
  ];
  
  // Fill in the stats for each row
  let statIndex = 0;
  statsTables.forEach(table => {
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      if (statIndex < statsMap.length) {
        const stat = statsMap[statIndex];
        const inputs = row.querySelectorAll('input');
        
        // Inputs: [0]=Final, [1]=Min, [2]=Max, [3]=Cost, [4]=Mod, [5]=Spend
        if (typeof stat.data === 'object' && stat.data !== null) {
          // Stats with min/max/cost structure
          inputs[1].value = stat.data.min || '';
          inputs[2].value = stat.data.max || '';
          inputs[3].value = stat.data.cost || '';
        } else {
          // Simple number stats (armor, fortune)
          inputs[1].value = stat.data || '';
          inputs[2].value = stat.data || '';
          inputs[3].value = '';
        }
        
        statIndex++;
      }
    });
  });
}

// Update Race allowed field based on selected class and race
function updateRaceAllowed() {
  if (typeof classRaceLookup === 'undefined') return;
  
  const classDropdown = document.querySelector('.dropdown-1');
  const raceDropdown = document.querySelector('.dropdown-2');
  
  const classValue = classDropdown.value;
  const raceValue = raceDropdown.value;
  
  // Find the Race allowed input field
  const statsTables = document.querySelectorAll('.stats-table tbody');
  let raceAllowedInput = null;
  
  statsTables.forEach(table => {
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      const firstCell = row.querySelector('td');
      if (firstCell && firstCell.textContent.trim() === 'Race allowed') {
        raceAllowedInput = row.querySelector('input[readonly]');
      }
    });
  });
  
  if (!raceAllowedInput) return;
  
  // Clear styling and value if either dropdown is empty
  if (!classValue || !raceValue) {
    raceAllowedInput.value = '';
    raceAllowedInput.style.backgroundColor = '';
    return;
  }
  
  // Convert dropdown values back to proper names
  const className = classes.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === classValue)?.name;
  const raceName = races.find(r => r.name.toLowerCase().replace(/\s+/g, '-') === raceValue)?.name;
  
  if (!className || !raceName) return;
  
  // Look up compatibility
  const compatibility = classRaceLookup[className]?.[raceName] || '';
  
  // Update input value
  raceAllowedInput.value = compatibility;
  
  // Update background color
  if (compatibility.toLowerCase() === 'no' || compatibility.toLowerCase().includes('no*')) {
    raceAllowedInput.style.backgroundColor = '#ff6b6b';
  } else if (compatibility && compatibility.toLowerCase() !== '') {
    raceAllowedInput.style.backgroundColor = '#90ee90';
  } else {
    raceAllowedInput.style.backgroundColor = '#ff6b6b';
  }
}
