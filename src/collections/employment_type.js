// mapeada igual o app 30/01/18
const employment_type_map = {
  "CO": { "code": "CO", "label": "Período Integral" },
  "IN": { "code": "IN", "label": "Meio Período" },
  "TC": { "code": "TC", "label": "Terceiro" },
  "TE": { "code": "TE", "label": "Temporário" },
  "VO": { "code": "VO", "label": "Voluntário" },
  "OT": { "code": "OT", "label": "Outros" }
};

const employment_type_legal_map = {
  "MA": { "code": "MA", "label": "Menor Aprendiz" },
  "ES": { "code": "ES", "label": "Estágio" },
  "CL": { "code": "CL", "label": "CLT - Prazo indeterminado" },
  "PJ": { "code": "PJ", "label": "PJ - Pessoa Jurídica" },
  "SO": { "code": "SO", "label": "Societário" },
  "ST": { "code": "ST", "label": "Estatuário" }
};

const employment_type_collection = Object.keys(employment_type_map).map(
  key => employment_type_map[key] );

const employment_type_legal_collection = Object.keys(employment_type_legal_map).map(
  key => employment_type_legal_map[key] );


const employment_type = {
  map: employment_type_map,
  collection: employment_type_collection
};

const employment_type_legal = {
  map: employment_type_legal_map,
  collection: employment_type_legal_collection
};

export {
  employment_type,
  employment_type_legal
};
