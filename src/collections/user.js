const marital_status_map = {
  'MA': {code: "MA", label: "Casado" },
  'WI': {code: "WI", label: "Viuvo" },
  'SE': {code: "SE", label: "Separado" },
  'DI': {code: "DI", label: "Divorciado" },
  'SI': {code: "SI", label: "Solteiro" }
};

const marital_status_collection = Object.keys(marital_status_map).map(
  key => marital_status_map[key] );

const gender_map = {
  'M': {code: "M", label: "Masculino" },
  'W': {code: "W", label: "Feminino" }
};

const gender_collection = Object.keys(gender_map).map(
  key => gender_map[key] );

const education_level_map = {
  'UNS': { code: 'UNS', label: "Não Específico" },
  'HSE': { code: 'HSE', label: "Ensino Médio" },
  'CRT': { code: 'CRT', label: "Certificação" },
  'VOC': { code: 'VOC', label: "Técnico" },
  'ASD': { code: 'ASD', label: "Associate Degree (US ONLY)" },
  'BAD': { code: 'BAD', label: "Bacharelado" },
  'MAD': { code: 'MAD', label: "Mestrado ou MBA" },
  'PGR': { code: 'PGR', label: "Pós Graduação" },
  'LIC': { code: 'LIC', label: "Licenciatura" },
  'DOC': { code: 'DOC', label: "Doutorado ou PHd" },
  'PRF': { code: 'PRF', label: "Professional (US Only)" },
  'SCC': { code: 'SCC', label: "Especialização" },
  'VDE': { code: 'VDE', label: "Ensino Médio Técnico" },
  'VHS': { code: 'VHS', label: "Curso Profissionalizante" },
  'SHC': { code: 'SHC', label: "Ensino Básico" }
};

const education_level_collection = Object.keys(education_level_map).map(
  key => education_level_map[key] );

const seniority_level_map = {
  "BM": { "code": "BM", "label": "Conselho" },
  "C": { "code": "C", "label": "C-Level" },
  "D": { "code": "D", "label": "Diretoria" },
  "EN": { "code": "EN", "label": "Operação" },
  "IC": { "code": "IC", "label": "Coordenação/Supervisão" },
  "IN": { "code": "IN", "label": "Estágio" },
  "M": { "code": "M", "label": "Gerencia" },
  "O": { "code": "O", "label": "Proprietário" },
  "OJ": { "code": "OJ", "label": "Operação - Junior" },
  "OP": { "code": "OP", "label": "Operação - Pleno" },
  "OS": { "code": "OS", "label": "Operação - Senior" },
  "P": { "code": "P", "label": "Sócio" },
  "TR": { "code": "TR", "label": "Trainee" },
  "UP": { "code": "UP", "label": "Voluntário" },
  "VP": { "code": "VP", "label": "Vice Presidencia" }
};

const seniority_level_collection = Object.keys(seniority_level_map).map(
  key => seniority_level_map[key] );

const document_types_map = {
  'NRG': { code: 'rg', label: "RG" },
  'CPF': { code: 'cpf', label: "CPF" },
  'CAM': { code: 'cam', label: "Alistamento Militar" },
  'PAS': { code: 'passport', label: "Passaporte" },
};

const document_types_collection = Object.keys(document_types_map).map(
  key => document_types_map[key] );

const marital_status = {
  map: marital_status_map,
  collection: marital_status_collection
};

const gender = {
  map: gender_map,
  collection: gender_collection
};

const education_level = {
  map: education_level_map,
  collection: education_level_collection
};

const seniority_level = {
  map: seniority_level_map,
  collection: seniority_level_collection
};

const document_types = {
  map: document_types_map,
  collection: document_types_collection
};

export {
  marital_status,
  gender,
  education_level,
  seniority_level,
  document_types
};
