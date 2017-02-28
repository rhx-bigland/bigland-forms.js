const states_map = {
  "AC": { "code": "AC", "label": "Acre" },
  "AL": { "code": "AL", "label": "Alagoas" },
  "AP": { "code": "AP", "label": "Amapá" },
  "AM": { "code": "AM", "label": "Amazonas" },
  "BA": { "code": "BA", "label": "Bahia" },
  "CE": { "code": "CE", "label": "Ceará" },
  "DF": { "code": "DF", "label": "Distrito Federal" },
  "ES": { "code": "ES", "label": "Espírito Santo" },
  "GO": { "code": "GO", "label": "Goiás" },
  "MA": { "code": "MA", "label": "Maranhão" },
  "MT": { "code": "MT", "label": "Mato Grosso" },
  "MS": { "code": "MS", "label": "Mato Grosso do Sul" },
  "MG": { "code": "MG", "label": "Minas Gerais" },
  "PA": { "code": "PA", "label": "Pará" },
  "PB": { "code": "PB", "label": "Paraíba" },
  "PR": { "code": "PR", "label": "Paraná" },
  "PE": { "code": "PE", "label": "Pernambuco" },
  "PI": { "code": "PI", "label": "Piauí" },
  "RJ": { "code": "RJ", "label": "Rio de Janeiro" },
  "RN": { "code": "RN", "label": "Rio Grande do Norte" },
  "RS": { "code": "RS", "label": "Rio Grande do Sul" },
  "RO": { "code": "RO", "label": "Rondônia" },
  "RR": { "code": "RR", "label": "Roraima" },
  "SC": { "code": "SC", "label": "Santa Catarina" },
  "SP": { "code": "SP", "label": "São Paulo" },
  "SE": { "code": "SE", "label": "Sergipe" },
  "TO": { "code": "TO", "label": "Tocantins" },
};

const states_collection = Object.keys(states_map).map(
  key => states_map[key] );

export {
  states_map as map,
  states_collection as collection
};
