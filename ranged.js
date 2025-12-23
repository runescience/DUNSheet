
const rangedWeapons = [
  { name: "-", cost: 0, damage: "", agilEffect: "", shootEffect: "", reload: "", range: "", breakOn: "", twoHanded: "", notes: "", wt: "-" },
  { name: "Arquebus", cost: 8, damage: "+5", agilEffect: "-1", shootEffect: "-1*", reload: "reload", range: "+18", breakOn: "1-4", twoHanded: "2h", notes: "", wt: 3 },
  { name: "Blowgun", cost: "-", damage: "+1", agilEffect: "", shootEffect: "", reload: "reload", range: "+6", breakOn: "+1", twoHanded: "", notes: "Hits have the skill \"Poisonous\". Critical hits cause no extra damage.", wt: "-" },
  { name: "Combosite Bow", cost: 3, damage: "+3", agilEffect: "", shootEffect: "", reload: "", range: "+20", breakOn: "1-3", twoHanded: "2h", notes: "", wt: 3 },
  { name: "Crossbow", cost: 5, damage: "+4", agilEffect: "-1", shootEffect: "", reload: "reload", range: "+24", breakOn: "1-3", twoHanded: "2h", notes: "2 shots per turn", wt: 3 },
  { name: "Elven Bow", cost: 10, damage: "+4", agilEffect: "", shootEffect: "", reload: "", range: "+24", breakOn: "+1", twoHanded: "2h", notes: "", wt: 1 },
  { name: "Handgun", cost: 5, damage: "+3", agilEffect: "-1", shootEffect: "", reload: "reload", range: "+10", breakOn: "1-4", twoHanded: "", notes: "", wt: 1 },
  { name: "Heavy Javelin", cost: 2, damage: "Str", agilEffect: "-1", shootEffect: "", reload: "", range: "Rng 2xStr", breakOn: "1-2", twoHanded: "", notes: "Thown", wt: 2 },
  { name: "Javelin", cost: 1, damage: "Str", agilEffect: "", shootEffect: "", reload: "", range: "Rng 3xStr", breakOn: "1-2", twoHanded: "", notes: "Thown", wt: 2 },
  { name: "Longbow", cost: 4, damage: "+4", agilEffect: "", shootEffect: "", reload: "", range: "+24", breakOn: "1-2", twoHanded: "2h", notes: "Cant perform Defensive Shots.", wt: 2 },
  { name: "Net", cost: 2, damage: "", agilEffect: "", shootEffect: "-1", reload: "", range: "+3", breakOn: "+1", twoHanded: "", notes: "Thown", wt: 2 },
  { name: "Repeating Crossbow", cost: 11, damage: "+3", agilEffect: "", shootEffect: "-1", reload: "reload", range: "+20", breakOn: "1-4", twoHanded: "2h", notes: "", wt: "" },
  { name: "Short Bow", cost: 2, damage: "+3", agilEffect: "", shootEffect: "-1", reload: "", range: "+18", breakOn: "1-2", twoHanded: "2h", notes: "", wt: 1 },
  { name: "Shuriken", cost: 1, damage: "+2", agilEffect: "", shootEffect: "", reload: "", range: "+6", breakOn: "+1", twoHanded: "", notes: "Thown", wt: 1 },
  { name: "Sling", cost: 1, damage: "+3", agilEffect: "", shootEffect: "-1", reload: "", range: "+20", breakOn: "+1", twoHanded: "", notes: "", wt: 1 },
  { name: "Sling with Lead Projectiles", cost: 2, damage: "+3", agilEffect: "", shootEffect: "-1", reload: "", range: "+20", breakOn: "+1", twoHanded: "", notes: "", wt: 1 }
];
