const disabilities = {
  'PHY': { code: 'PHY', label: "Física" },
  'VIS': { code: 'VIS', label: "Visual" },
  'AUD': { code: 'AUD', label: "Auditiva" },
  'INT': { code: 'INT', label: "Intelectual" },
  'OTH': { code: 'OTH', label: "Outros (Especifique)" }
};

const disabilities_collection = Object.keys(disabilities).map(
    key => disabilities[key] );

export {
  disabilities as map,
  disabilities_collection as collection
};
