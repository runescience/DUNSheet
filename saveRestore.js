function saveSheet() {
  const data = {
    name: document.querySelector('.name-field').value,
    gold: document.getElementById('gold-input').value,
    vp: document.getElementById('vp-input').value,
    class: document.querySelector('.dropdown-1').value,
    race: document.querySelector('.dropdown-2').value,
    stats: [],
    weapons: [],
    ranged: [],
    shields: [],
    armor: [],
    descriptions: {
      class: document.getElementById('class-description').value,
      race: document.getElementById('race-description').value
    }
  };

  document.querySelectorAll('.stats-table tbody tr').forEach(row => {
    const inputs = row.querySelectorAll('input');
    data.stats.push(Array.from(inputs).map(i => i.value));
  });

  document.querySelectorAll('.weapons-table tbody tr').forEach(row => {
    const checkbox = row.querySelector('.equip-checkbox');
    const select = row.querySelector('select');
    const inputs = row.querySelectorAll('input:not(.equip-checkbox)');
    data.weapons.push({
      checked: checkbox.checked,
      select: select.value,
      values: Array.from(inputs).map(i => i.value)
    });
  });

  document.querySelectorAll('.ranged-table tbody tr').forEach(row => {
    const checkbox = row.querySelector('.equip-checkbox');
    const select = row.querySelector('select');
    const inputs = row.querySelectorAll('input:not(.equip-checkbox)');
    data.ranged.push({
      checked: checkbox.checked,
      select: select.value,
      values: Array.from(inputs).map(i => i.value)
    });
  });

  document.querySelectorAll('.shields-table tbody tr').forEach(row => {
    const checkbox = row.querySelector('.equip-checkbox');
    const select = row.querySelector('select');
    const inputs = row.querySelectorAll('input:not(.equip-checkbox)');
    data.shields.push({
      checked: checkbox.checked,
      select: select.value,
      values: Array.from(inputs).map(i => i.value)
    });
  });

  document.querySelectorAll('.armor-table tbody tr').forEach(row => {
    const checkbox = row.querySelector('.equip-checkbox');
    const select = row.querySelector('select');
    const inputs = row.querySelectorAll('input:not(.equip-checkbox)');
    data.armor.push({
      checked: checkbox.checked,
      select: select.value,
      values: Array.from(inputs).map(i => i.value)
    });
  });

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'character-sheet.json';
  a.click();
  URL.revokeObjectURL(url);
}

function restoreSheet() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const data = JSON.parse(event.target.result);
      
      document.querySelector('.name-field').value = data.name || '';
      document.getElementById('gold-input').value = data.gold || '';
      document.getElementById('vp-input').value = data.vp || '';
      document.querySelector('.dropdown-1').value = data.class || '';
      document.querySelector('.dropdown-2').value = data.race || '';

      document.querySelectorAll('.stats-table tbody tr').forEach((row, i) => {
        if (data.stats[i]) {
          row.querySelectorAll('input').forEach((input, j) => {
            input.value = data.stats[i][j] || '';
          });
        }
      });

      document.querySelectorAll('.weapons-table tbody tr').forEach((row, i) => {
        if (data.weapons[i]) {
          const checkbox = row.querySelector('.equip-checkbox');
          checkbox.checked = data.weapons[i].checked || false;
          row.querySelector('select').value = data.weapons[i].select || '';
          row.querySelectorAll('input:not(.equip-checkbox)').forEach((input, j) => {
            input.value = data.weapons[i].values[j] || '';
          });
        }
      });

      document.querySelectorAll('.ranged-table tbody tr').forEach((row, i) => {
        if (data.ranged[i]) {
          const checkbox = row.querySelector('.equip-checkbox');
          checkbox.checked = data.ranged[i].checked || false;
          row.querySelector('select').value = data.ranged[i].select || '';
          row.querySelectorAll('input:not(.equip-checkbox)').forEach((input, j) => {
            input.value = data.ranged[i].values[j] || '';
          });
        }
      });

      document.querySelectorAll('.shields-table tbody tr').forEach((row, i) => {
        if (data.shields[i]) {
          const checkbox = row.querySelector('.equip-checkbox');
          checkbox.checked = data.shields[i].checked || false;
          row.querySelector('select').value = data.shields[i].select || '';
          row.querySelectorAll('input:not(.equip-checkbox)').forEach((input, j) => {
            input.value = data.shields[i].values[j] || '';
          });
        }
      });

      document.querySelectorAll('.armor-table tbody tr').forEach((row, i) => {
        if (data.armor[i]) {
          const checkbox = row.querySelector('.equip-checkbox');
          checkbox.checked = data.armor[i].checked || false;
          row.querySelector('select').value = data.armor[i].select || '';
          row.querySelectorAll('input:not(.equip-checkbox)').forEach((input, j) => {
            input.value = data.armor[i].values[j] || '';
          });
        }
      });

      if (data.descriptions) {
        document.getElementById('class-description').value = data.descriptions.class || '';
        document.getElementById('race-description').value = data.descriptions.race || '';
      }
      
      updateStatModifiers();
    };
    reader.readAsText(file);
  };
  input.click();
}
